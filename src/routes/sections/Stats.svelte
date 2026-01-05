<script>
  import { services } from "$lib/data/data";
  import { addToCart } from "$lib/state/cart.state.svelte";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";
  import Cart from "$lib/components/icons/Cart.svelte";
  import Star from "$lib/components/icons/Star.svelte";

  const trustedBy = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/960px-Facebook_f_logo_%282021%29.svg.png?20210818083032",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2024_Spotify_Logo.svg/2560px-2024_Spotify_Logo.svg.png",
  ];
</script>

<section
  in:fade
  class="bg-stone-200 text-stone-900 w-full flex flex-col items-center py-28"
>
  <div class="container w-full">
    <div class="flex justify-center mb-26 w-full">
      <div class="flex-1 text-center">
        <p class="text-6xl font-extrabold mb-1">145+</p>
        <p class="text-2xl font-semibold">Apps created</p>
      </div>
      <div class="flex-1 text-center">
        <p class="text-6xl font-extrabold mb-1">1800+</p>
        <p class="text-2xl font-semibold">Active projects</p>
      </div>
      <div class="flex-1 text-center">
        <p class="text-6xl font-extrabold mb-1">7000+</p>
        <p class="text-2xl font-semibold">Types of code issues detected</p>
      </div>
    </div>
    <h1 class="mb-4">Trusted By</h1>
    <div class="space-x-4">
      {#each trustedBy as logo}
        <img
          class="h-32 object-fit inline-block saturate-0 hover:saturate-100 transition-all duration-300 bg-stone-950 hover:bg-stone-500 p-10 rounded-sm"
          src={logo}
          alt=""
        />
      {/each}
    </div>
  </div>
</section>
