<script>
  import Stats from "./sections/Stats.svelte";
  import CartMenu from "$lib/components/CartMenu.svelte";
  import Jumbotron from "./sections/Jumbotron.svelte";
  import Support from "./sections/Support.svelte";
  import { setDarkMode } from "$lib/state/darkmode.state.svelte";
  import Services from "./sections/Services.svelte";

  setDarkMode(true);
</script>

<main id="main" class="flex flex-col items-center bg-stone-950">
  <Jumbotron></Jumbotron>
  <Stats></Stats>
  <CartMenu></CartMenu>
  <Services></Services>
  <Support></Support>
</main>
