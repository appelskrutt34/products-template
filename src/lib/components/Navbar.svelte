<script>
  import { slide } from "svelte/transition";
  import { services } from "$lib/data/data";
  import { darkmode } from "$lib/state/darkmode.state.svelte";
  import NewPage from "./icons/NewPage.svelte";
  import Star from "./icons/Star.svelte";
  import Close from "./icons/Close.svelte";
  import Menu from "./icons/Menu.svelte";

  let y = $state(0);
  let navOpen = $state(true);
  let lastScrollY = 0;
  let openMenu = $state(false);
  let whiteBg = $state(false);
  let navClass = $state(
    "bg-stone-100 text-stone-950 border-b border-b-stone-400"
  );
  let iconClass = $state("fill-stone-100");

  $effect(() => {
    if (y < 400) {
      navOpen = true;
      lastScrollY = y;
      navClass =
        "text-stone-100 backdrop-blur-lg border-b border-b-stone-500 hover:bg-stone-100 hover:text-stone-950";
      iconClass =
        "fill-stone-100 group-hover/nav:fill-stone-950 group-hover/nav:group-hover/button:fill-stone-100";
      return;
    }

    navOpen = y < lastScrollY;
    lastScrollY = y;
    whiteBg = true;
    navClass = "bg-stone-100 text-stone-950 border-b border-b-stone-400";
    iconClass = "text-stone-950 group-hover/button:fill-stone-100";
  });

  function scrollInto(id) {
    let element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
      duration: 200,
    });
  }
</script>

{#if navOpen}
  <nav
    onfocus={() => (whiteBg = true)}
    onmouseover={() => (whiteBg = true)}
    onmouseleave={() => {
      if (y > 400) whiteBg = true;
      else whiteBg = false;
    }}
    onwheel={(e) => e.preventDefault()}
    in:slide={{ duration: 100 }}
    out:slide={{ duration: 100 }}
    class="hidden md:flex flex-col items-center group/nav
    fixed top-0 left-0 w-full z-50 justify-center
    {navClass}
    transition-all duration-300"
  >
    <div class="h-22 flex flex-row items-center justify-between container">
      <a
        href="/"
        class="px-6 py-4 text-center rounded-sm hover:bg-stone-950 hover:text-stone-100 transition-colors duration-300"
        >Home</a
      >
      <div class="flex items-center gap-2">
        <button
          role="link"
          onclick={() => scrollInto("services")}
          class=" px-6 py-4 text-center rounded-sm hover:bg-stone-950 hover:text-stone-100 transition-colors duration-300 group/button"
        >
          Services
        </button>
        <button
          role="link"
          onclick={() => scrollInto("contact")}
          class=" px-6 py-4 text-center rounded-sm hover:bg-stone-950 hover:text-stone-100 transition-colors duration-300 group/button"
        >
          Contact
        </button>
        <button
          class=" px-6 py-4 text-center rounded-sm hover:bg-stone-950 hover:text-stone-100 transition-colors duration-300 group/button"
        >
          Products <NewPage customClass={iconClass}></NewPage>
        </button>
        <button
          class=" px-6 py-4 text-center rounded-sm hover:bg-stone-950 hover:text-stone-100 transition-colors duration-300 group/button"
        >
          Career <NewPage customClass={iconClass}></NewPage>
        </button>
      </div>
      <div></div>
    </div>
  </nav>
{/if}
<nav
  in:fade
  class="md:hidden w-full fixed top-0 right-0 left-0 text-stone-100 bg-stone-900 border-b border-b-stone-500 z-20"
>
  <div class="flex justify-between p-6">
    <button
      aria-label="Toggle main menu"
      aria-expanded={openMenu}
      onclick={() => {
        openMenu = !openMenu;
      }}
    >
      {#if openMenu}
        <Close customClass="fill-stone-100"></Close>
      {:else}
        <Menu customClass="fill-stone-100"></Menu>
      {/if}
    </button>
  </div>
  {#if openMenu}
    <div
      in:slide={{ y: -10, duration: 300 }}
      out:slide={{ y: -10, duration: 300 }}
      class="w-full text-center pb-4 flex flex-col gap-6"
      style="margin-top: -1px"
    >
      <button
        onclick={() => {
          openMenu = false;
          scrollInto("services");
        }}>Services</button
      >
      <button
        onclick={() => {
          openMenu = false;
          scrollInto("contact");
        }}>Contact</button
      >
      <a
        href="#"
        onclick={() => {
          openMenu = false;
        }}>Products <NewPage customClass="fill-stone-100"></NewPage></a
      >
      <a
        href="#"
        onclick={() => {
          openMenu = false;
        }}>Career <NewPage customClass="fill-stone-100"></NewPage></a
      >
    </div>
  {/if}
</nav>

<svelte:window bind:scrollY={y} />
