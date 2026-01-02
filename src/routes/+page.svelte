<script>
  import Products from "./sections/Products.svelte";
  import CartMenu from "$lib/components/CartMenu.svelte";
  import Jumbotron from "./sections/Jumbotron.svelte";
</script>

<main id="main" class="flex flex-col items-center h-[1600px] bg-stone-900">
  <Jumbotron></Jumbotron>
  <Products></Products>
  <CartMenu></CartMenu>
</main>
