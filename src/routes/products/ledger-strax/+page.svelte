<script>
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import { fade } from "svelte/transition";

  function scrollInto(id) {
    let element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
      duration: 200,
    });
  }
</script>

<div in:fade class="bg-stone-950 w-full text-stone-100 pt-22">
  <div class="flex flex-col w-full h-screen items-center">
    <section class="flex container justify-between items-center py-28">
      <img
        class="w-82 object-fit"
        src="https://freepngimg.com/thumb/daft_punk/36558-2-daft-punk-photo.png"
        alt=""
      />

      <div class="text-right max-w-[50%] flex flex-col justify-between h-82">
        <div>
          <h1>Ledger Strax</h1>
          <p class="mb-8 text-lg font-semibold">
            The most elegant touchscreen signer for a premium crypto experience
            from every angle
          </p>
        </div>

        <div class="space-x-2">
          <button
            class="rounded-full border border-stone-500 hover:border-stone-100 hover:bg-stone-800 bg-stone-900 transition-colors duration-300 px-6 py-4"
            >Add to cart</button
          >
          <button
            onclick={() => scrollInto("trust")}
            class="rounded-full bg-stone-200 hover:bg-stone-100 text-stone-900 transition-colors duration-300 px-6 py-4"
            >Learn more <ArrowDown></ArrowDown>
          </button>
        </div>
      </div>
    </section>

    <section class="relative w-full h-[220px] flex justify-center">
      <div
        class="bg-[radial-gradient(circle,_rgba(245,245,244,.2)_1px,_transparent_1px)]
    bg-[size:20px_20px]

    [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
    [-webkit-mask-image:radial-gradient(ellipse_at_center,black_1%,transparent_100%)] absolute top-0 bottom-0 left-0 right-0"
      ></div>

      <div
        class="flex justify-between items-center h-full container font-semibold"
      >
        <p>Uncompromising security</p>
        <div class="w-px h-18 bg-stone-100"></div>
        <p>Customisable display</p>
        <div class="w-px h-18 bg-stone-100"></div>
        <p>Revolutionary design</p>
      </div>
    </section>
  </div>

  <section class="h-screen flex flex-col items-center relative" id="trust">
    <h1 style="font-size: 100px">In Ledger Stax we trust</h1>
    <img
      class="w-[90%] h-[90%] absolute bottom-0 left-0 right-0 object-fit"
      src="https://freepngimg.com/thumb/daft_punk/36597-7-daft-punk-image.png"
      alt=""
    />
  </section>
</div>
