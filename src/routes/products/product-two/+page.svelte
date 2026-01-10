<script>
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
      width="328px"
      class="object-fit"
      src="https://freepngimg.com/thumb/daft_punk/36558-2-daft-punk-photo.png"
      alt=""
    />

    <div class="text-right max-w-[50%] flex flex-col justify-between h-82">
      <div>
        <h1>Product Two Title</h1>
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
          onclick={() => scrollInto("learn-more")}
          class="font-semibold rounded-full bg-stone-900 hover:bg-stone-800 text-stone-100 transition-colors duration-300 px-6 py-4"
          >Learn more <ArrowDown customClass="fill-stone-100"></ArrowDown>
        </button>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center gap-16 py-28" id="learn-more">
    <h1 style="font-size: 100px">Lorem ipsum dolor sit amet</h1>
    <div class="container flex justify-between gap-6">
      {#each Array(3) as _, i}
        <div
          class="border border-stone-400 relative flex flex-col items-center w-full"
        >
          <h1 class="absolute left-2 top-2">{i + 1}</h1>
          <img
            width="280px"
            class="object-fit"
            src="https://freepngimg.com/thumb/daft_punk/36558-2-daft-punk-photo.png"
            alt=""
          />
          <div class="p-4 space-y-2">
            <h2 class="font-bold text-center">
              Sed ut perspiciatis unde omnis
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
