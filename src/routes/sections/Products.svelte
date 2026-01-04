<script>
  import { services } from "$lib/data/data";
  import { addToCart } from "$lib/state/cart.state.svelte";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";
  import Cart from "$lib/components/icons/Cart.svelte";
  import Star from "$lib/components/icons/Star.svelte";
</script>

<section
  in:fade
  class="bg-stone-200 text-stone-900 w-full flex flex-col items-center py-24"
>
  <h1>Top Products</h1>
  <h2 class="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
  <div class="flex gap-6">
    {#each services as service}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div
        aria-label="Go to product {service.name}"
        tabindex="0"
        role="link"
        onclick={() => goto("/products/" + service.link)}
        class="border border-stone-400 rounded-xs bg-stone-100 flex flex-col justify-between items-center h-[540px] hover:cursor-pointer hover:border-stone-800 transition-colors duration-300"
      >
        <div class="flex flex-col items-center w-full">
          <img
            class="w-[220px] content-fit"
            src="https://preview.redd.it/were-sharing-fan-made-modeled-mau5-heads-now-here-are-some-v0-jfao51zqo6fb1.png?width=640&crop=smart&auto=webp&s=8b37f70d15c309615c1d07426efdca9e69ca3a8b"
            alt=""
          />

          <p class="font-bold text-xl mt-4">{service.name}</p>
        </div>

        <div class="flex flex-col items-center w-full">
          <button
            aria-label="Add to cart"
            onclick={() => addToCart(service)}
            class="rounded-full bg-stone-950 p-2 hover:bg-stone-700 transition-colors duration-300 my-4"
            ><Cart></Cart></button
          >
        </div>
      </div>
    {/each}
  </div>
</section>
