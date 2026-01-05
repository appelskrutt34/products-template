<script>
  import Stats from "./sections/Stats.svelte";
  import CartMenu from "$lib/components/CartMenu.svelte";
  import QA from "./sections/QA.svelte";
  import { setDarkMode } from "$lib/state/darkmode.state.svelte";
  import Services from "./sections/Services.svelte";

  import Bubble from "$lib/components/icons/Bubble.svelte";
  import Question from "$lib/components/icons/Question.svelte";
  import Smiley from "$lib/components/icons/Smiley.svelte";
  import Star from "$lib/components/icons/Star.svelte";
  import { fade } from "svelte/transition";
  import Twinkle from "$lib/components/ascii/Twinkle.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Cat from "$lib/components/ascii/Cat.svelte";
  import Planet from "$lib/components/ascii/Planet.svelte";
  import Galaxy from "$lib/components/ascii/Galaxy.svelte";
  import Contact from "./sections/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";

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
    class="flex justify-center pt-22 bg-stone-950 text-stone-100 w-full bg-[linear-gradient(109deg,var(--color-stone-950)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-950)_86.45%,transparent_100%)]"
  >
    <div class="container py-10 flex">
      <div class="flex flex-col w-[60%]">
        <h1>Software Solutions</h1>
        <h2>High-quality engineering for web, apps, and cloud</h2>

        <div class="flex gap-4 mt-16">
          {#each categories as category, i}
            <button
              onclick={() => scrollInto(category.link)}
              class="group flex flex-row rounded-sm hover:border-stone-100 bg-stone-950 hover:bg-stone-500 text-stone-100 transition-colors duration-200"
            >
              <div class="flex items-center p-4">
                {#if i === 0}
                  <Star
                    customClass="fill-stone-100 group-hover:fill-blue-700 transition-colors duration-300"
                  ></Star>
                {:else if i === 1}
                  <Bubble
                    customClass="fill-stone-100 group-hover:fill-violet-700 transition-colors duration-300"
                  ></Bubble>
                {:else}
                  <Question
                    customClass="fill-stone-100 group-hover:fill-pink-700 transition-colors duration-300"
                  ></Question>
                {/if}
              </div>
              <p class="py-2 px-4 flex items-center">
                {category.name}
              </p>
            </button>
          {/each}
        </div>
      </div>
      <div class="w-[40%]"></div>
    </div>
  </section>
  <Stats></Stats>
  <CartMenu></CartMenu>
  <Services></Services>
  <Contact></Contact>
  <QA></QA>
  <Footer></Footer>
</main>
