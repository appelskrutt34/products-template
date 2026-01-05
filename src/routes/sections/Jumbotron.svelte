<script>
  import Bubble from "$lib/components/icons/Bubble.svelte";
  import Question from "$lib/components/icons/Question.svelte";
  import Smiley from "$lib/components/icons/Smiley.svelte";
  import Star from "$lib/components/icons/Star.svelte";
  import { fade } from "svelte/transition";

  const categories = [
    { name: "Our Services", link: "#services" },
    { name: "Contact Us", link: "#support" },
    { name: "Questions and Answers", link: "#questions-and-answers" },
  ];

  function scrollInto(id) {
    let element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
      duration: 200,
    });
  }
</script>

<section
  in:fade
  class="flex justify-center pt-22 bg-stone-950 text-stone-100 w-full bg-[linear-gradient(109deg,var(--color-stone-950)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-950)_86.45%,transparent_100%)]"
>
  <div class="container py-10 flex justify-between">
    <div class="flex flex-col justify-between pt-8">
      <div>
        <h1>Software Services</h1>
        <p class="text-lg font-semibold">Cool tech, no fluff</p>
      </div>
      <div class="flex gap-4">
        {#each categories as category, i}
          <button
            onclick={() => scrollInto(category.link)}
            class="group flex flex-row rounded-full border hover:border-stone-100 border-stone-500 bg-stone-900 hover:brightness-130 text-stone-100 transition-colors duration-200"
          >
            <div
              class="rounded-full flex items-center p-4 bg-stone-950 border border-stone-500 group-hover:border-stone-100 transition-colors duration-200"
            >
              {#if i === 0}
                <Star></Star>
              {:else if i === 1}
                <Bubble></Bubble>
              {:else}
                <Question></Question>
              {/if}
            </div>
            <p class="py-2 px-4 text-center flex items-center">
              {category.name}
            </p>
          </button>
        {/each}
      </div>
    </div>
    <img
      class="w-[350px] content-fit"
      src="https://preview.redd.it/were-sharing-fan-made-modeled-mau5-heads-now-here-are-some-v0-jfao51zqo6fb1.png?width=640&crop=smart&auto=webp&s=8b37f70d15c309615c1d07426efdca9e69ca3a8b"
      alt=""
    />
  </div>
</section>
