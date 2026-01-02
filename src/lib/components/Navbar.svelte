<script>
  import { slide } from "svelte/transition";
  import { wallets } from "$lib/data/data";
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
    class=" flex flex-col
    fixed top-0 left-0 w-full z-50 justify-center
    {!whiteBg
      ? 'text-stone-100 backdrop-blur-lg border-b border-b-stone-500'
      : 'bg-stone-200 text-stone-900'}
    transition duration-200 ease-in-out"
  >
    <div class="flex justify-center">
      <button
        class="relative p-6 text-center group"
        onfocus={() => (menuOpen = true)}
        onmouseover={() => (menuOpen = true)}
      >
        Products
        <stone-900
          class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
        ></stone-900>
      </button>
      <button
        class="relative p-6 text-center group"
        onfocus={() => (menuOpen = true)}
        onmouseover={() => (menuOpen = true)}
      >
        Products
        <stone-900
          class="
      absolute bottom-0 left-0 w-full h-0.5 bg-stone-900
      opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
        ></stone-900>
      </button>
    </div>

    {#if menuOpen}
      <div
        class="flex justify-center w-full bg-stone-200 py-12"
        in:slide={{ y: -10, duration: 200 }}
        out:slide={{ y: -10, duration: 200 }}
      >
        <div class="container gap-6 flex text-stone-900">
          {#each wallets as wallet}
            <button
              ><div
                class="w-20 h-[100px] bg-stone-900 rounded-md transition-transform duration-300 hover:-translate-y-4 mb-1"
              ></div>

              {wallet.name}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
{/if}

<svelte:window bind:scrollY={y} />
