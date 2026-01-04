<script>
  import Products from "./sections/Products.svelte";
  import CartMenu from "$lib/components/CartMenu.svelte";
  import Jumbotron from "./sections/Jumbotron.svelte";
  import QA from "./sections/QA.svelte";
  import { setDarkMode } from "$lib/state/darkmode.state.svelte";
  import Services from "./sections/Services.svelte";

  setDarkMode(true);
</script>

<main id="main" class="flex flex-col items-center bg-stone-950">
  <Jumbotron></Jumbotron>
  <Products></Products>
  <CartMenu></CartMenu>
  <Services></Services>
  <QA></QA>
</main>
