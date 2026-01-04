<script>
  import { slide } from "svelte/transition";
  import { services } from "$lib/data/data";
  import { darkmode } from "$lib/state/darkmode.state.svelte";
  let y = $state(0);
  let navOpen = $state(true);
  let lastScrollY = 0;
  let menuOpen = $state(false);
  let whiteBg = $state(false);

  $effect(() => {
    if (y < 400) {
      navOpen = true;
      lastScrollY = y;
      if (menuOpen) whiteBg = true;
      else whiteBg = false;
      return;
    }

    navOpen = y < lastScrollY;
    lastScrollY = y;
    whiteBg = true;
  });
</script>

{#if navOpen}
  <nav
    onfocus={() => (whiteBg = true)}
    onmouseover={() => (whiteBg = true)}
    onmouseleave={() => {
      if (y > 400) whiteBg = true;
      else whiteBg = false;

      menuOpen = false;
    }}
    onwheel={(e) => e.preventDefault()}
    in:slide={{ duration: 200 }}
    out:slide={{ duration: 200 }}
    class="flex flex-col items-center
    fixed top-0 left-0 w-full z-50 justify-center
    {!darkmode.on
      ? 'bg-stone-200 text-stone-900 border-b border-b-stone-400'
      : !whiteBg
        ? 'text-stone-100 backdrop-blur-lg border-b border-b-stone-500'
        : 'bg-stone-200 text-stone-900 border-b border-b-stone-400'}
    transition duration-200 ease-in-out"
  >
    <div class="h-22 flex flex-row items-center justify-between container">
      <a
        href="/"
        class="border-2 border-transparent hover:border-stone-950 transition-colors p-2 rounded-full"
        >Home</a
      >
      <div class="h-full">
        <button
          class="relative px-6 text-center group h-full"
          onfocus={() => (menuOpen = true)}
          onmouseover={() => (menuOpen = true)}
        >
          Products
          <div
            class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
          ></div>
        </button>
        <button
          class="relative px-6 text-center group h-full"
          onfocus={() => (menuOpen = true)}
          onmouseover={() => (menuOpen = true)}
        >
          Resources
          <div
            class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
          ></div>
        </button>
        <button
          class="relative px-6 text-center group h-full"
          onfocus={() => (menuOpen = true)}
          onmouseover={() => (menuOpen = true)}
        >
          For Bussiness
          <div
            class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
          ></div>
        </button>
        <button
          class="relative px-6 text-center group h-full"
          onfocus={() => (menuOpen = true)}
          onmouseover={() => (menuOpen = true)}
        >
          Support
          <div
            class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
          ></div>
        </button>
      </div>
      <div></div>
    </div>

    {#if menuOpen}
      <div
        class="flex justify-center w-full bg-stone-200 py-12 border-t border-t-stone-400"
        in:slide={{ y: 10, duration: 200 }}
        out:slide={{ y: 10, duration: 200 }}
      >
        <div class="container gap-16 flex text-stone-900 text-sm font-semibold">
          {#each services as service}
            <a
              href="/products/{service.link}"
              class="flex flex-col items-center justify-center"
            >
              <div
                class="rounded-full w-18 p-3 bg-stone-900 transition-transform duration-300 hover:-translate-y-4 mb-1"
              >
                <img
                  alt="deadmau5 icon"
                  src="/deadmau5-icon.png"
                  class="w-full content-fit"
                />
              </div>

              {service.name}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
{/if}

<svelte:window bind:scrollY={y} />
