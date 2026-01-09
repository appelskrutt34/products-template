<script>
  import Stats from "./sections/Stats.svelte";
  import QA from "./sections/QA.svelte";
  import Services from "./sections/Services.svelte";
  import Contact from "./sections/Contact.svelte";

  import Bubble from "$lib/components/icons/Bubble.svelte";
  import Question from "$lib/components/icons/Question.svelte";
  import Star from "$lib/components/icons/Star.svelte";
  import { fade } from "svelte/transition";
  import { setDarkMode } from "$lib/state/darkmode.state.svelte";

  const categories = [
    { name: "Our Services", link: "services" },
    { name: "Contact Us", link: "contact" },
    { name: "Questions and Answers", link: "qa" },
  ];

  function scrollInto(id) {
    let element = document.getElementById(id);
    console.log("element " + element);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
      duration: 200,
    });
  }

  setDarkMode(true);
</script>

<main id="main" class="flex flex-col items-center bg-stone-950">
  <section
    in:fade
    class="flex justify-center pt-22 bg-stone-950 text-stone-100 w-full bg-[linear-gradient(109deg,var(--color-stone-950)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-950)_86.45%,transparent_100%)] px-6"
  >
    <div class="container py-28 flex flex-col">
      <h1>Software Solutions</h1>
      <h2>High-quality engineering for web, apps, and cloud</h2>
    </div>
  </section>

  <Services></Services>
  <Stats></Stats>
  <Contact></Contact>
  <QA></QA>
</main>
