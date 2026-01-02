<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Smiley from "$lib/components/icons/Smiley.svelte";
  import Products from "./sections/Products.svelte";
  import CartMenu from "$lib/components/CartMenu.svelte";

  const shopCategories = [
    { name: "Hardware wallets", link: "hardware-wallets" },
    { name: "Accessories", link: "accessories" },
    { name: "Bunldes & Packs", link: "bundles-and-packs" },
  ];
</script>

<Navbar></Navbar>

<main id="main" class="flex flex-col items-center h-[1600px] bg-stone-900">
  <section
    class="flex justify-center bg-stone-900 px-6 text-stone-100 w-full bg-[linear-gradient(109deg,var(--color-stone-900)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-900)_86.45%,transparent_100%)] pt-34 pb-24"
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
  <Products></Products>
  <CartMenu></CartMenu>
</main>
