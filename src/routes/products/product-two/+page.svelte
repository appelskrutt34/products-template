<script>
  import Carousel from "$lib/components/Carousel.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import { fade } from "svelte/transition";
  import { setDarkMode } from "$lib/state/darkmode.state.svelte";

  setDarkMode(false);

  function scrollInto(id) {
    let element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
      duration: 200,
    });
  }
</script>

<div
  in:fade
  class="bg-stone-100 w-full flex flex-col items-center text-stone-900 pt-22"
>
  <section class="flex container justify-between items-center py-28">
    <img
      class="w-82 object-fit"
      src="https://freepngimg.com/thumb/daft_punk/36558-2-daft-punk-photo.png"
      alt=""
    />

    <div class="text-right max-w-[50%] flex flex-col justify-between h-82">
      <div>
        <h1>Product One Title</h1>
        <p class="mb-8 text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="space-x-2">
        <button
          class="font-semibold rounded-full border border-stone-900 hover:bg-stone-100 bg-stone-200 transition-colors duration-300 px-6 py-4"
          >Add to cart</button
        >
        <button
          onclick={() => scrollInto("trust")}
          class="font-semibold rounded-full bg-stone-900 hover:bg-stone-800 text-stone-100 transition-colors duration-300 px-6 py-4"
          >Learn more <ArrowDown customClass="fill-stone-100"></ArrowDown>
        </button>
      </div>
    </div>
  </section>

  <section class="h-screen flex flex-col items-center relative" id="trust">
    <h1 style="font-size: 100px">Lorem ipsum dolor sit amet</h1>
    <img
      class="h-[89%] absolute bottom-0 object-fit"
      src="https://freepngimg.com/thumb/daft_punk/36597-7-daft-punk-image.png"
      alt=""
    />
  </section>

  <section class="flex justify-center">
    <div class="container py-28 text-right">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p class="mb-12">
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Carousel>
        {#each Array(10) as _}
          <div class="mx-8">
            <div
              class={`w-16 h-16 rounded-full bg-stone-900 border border-stone-300`}
            >
              <img
                class="w-full content-fit p-2 image-rendering-crisp-edges"
                alt=""
                src="/deadmau5-icon.png"
                loading="lazy"
              />
            </div>
          </div>
        {/each}
      </Carousel>
    </div>
  </section>
</div>
