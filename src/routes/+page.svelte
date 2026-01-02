<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { wallets } from "$lib/data/data";
  import { page } from "$app/stores";

  import Smiley from "$lib/components/icons/Smiley.svelte";
  import Star from "$lib/components/icons/Star.svelte";
  import Cart from "$lib/components/icons/Cart.svelte";

  const shopCategories = [
    { name: "Hardware wallets", link: "hardware-wallets" },
    { name: "Accessories", link: "accessories" },
    { name: "Bunldes & Packs", link: "bundles-and-packs" },
  ];
</script>

<Navbar></Navbar>

<main id="main" class="flex flex-col items-center h-[1600px] bg-stone-950">
  <section
    class="flex justify-center bg-stone-900 px-6 text-stone-100 w-full bg-[linear-gradient(109deg,var(--color-stone-950)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-950)_86.45%,transparent_100%)] pt-34 pb-24"
  >
    <div>
      <h1>Ledger Shop</h1>
      <h2 class="mb-12">The secure way to crypto</h2>
      <div class="flex gap-4">
        {#each shopCategories as category}
          <a
            href="/{category.link}"
            class="group flex flex-row rounded-full border hover:border-stone-100 border-stone-500 bg-stone-900 hover:bg-stone-800 text-stone-100 transition-colors duration-200"
          >
            <div
              class="rounded-full bg-stone-700 border border-stone-500 group-hover:border-stone-100 transition-colors duration-200"
            >
              <Smiley></Smiley>
            </div>
            <p class="py-2 px-4 text-center flex items-center">
              {category.name}
            </p>
          </a>
        {/each}
      </div>
    </div>
  </section>
  <section
    class="bg-stone-200 text-stone-900 w-full flex flex-col items-center py-24"
  >
    <h1>Ledger Signers</h1>
    <h2 class="mb-12">The world’s first secure hardware wallets</h2>
    <div class="flex gap-6">
      {#each wallets as wallet}
        <a
          href="/{wallet.link}"
          class="border border-stone-400 rounded-xs bg-stone-100 flex flex-col justify-between items-center h-[540px] hover:border-stone-800 transition-colors duration-300"
        >
          <div class="flex flex-col items-center w-full">
            <div class="bg-stone-900 h-[220px] w-[220px]"></div>
            <p class="font-bold text-xl mt-4">{wallet.name}</p>
            <p class=" text-stone-700 mb-2">{wallet.quote}</p>
            {#each wallet.qualities as quality}
              <p class="my-1 bg-stone-200 px-2">{quality}</p>
            {/each}
          </div>

          <div class="flex flex-col items-center w-full">
            <div>
              {#each [...Array(wallet.stars)] as _, i}
                <Star />
              {/each}
            </div>

            <p>SEK {wallet.price}</p>
            <button
              class="rounded-full bg-stone-900 p-2 hover:bg-stone-700 transition-colors duration-300 my-4"
              ><Cart></Cart></button
            >
          </div>
        </a>
      {/each}
    </div>
  </section>
</main>
