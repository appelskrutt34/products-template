<script>
  import { fade } from "svelte/transition";

  const trustedBy = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/960px-Facebook_f_logo_%282021%29.svg.png?20210818083032",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2024_Spotify_Logo.svg/2560px-2024_Spotify_Logo.svg.png",
  ];
</script>

<section
  in:fade
  class="bg-stone-100 text-stone-900 w-full py-16 md:py-28 border-b border-stone-400 flex justify-center px-6"
>
  <div
    class="container flex md:flex-row gap-12 md:gap-0 flex-col justify-center w-full"
  >
    <div class="flex-1 text-center">
      <p class="text-6xl font-extrabold mb-1">145+</p>
      <p class="text-2xl font-semibold">Apps launched</p>
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
</section>
