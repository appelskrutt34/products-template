<script>
  import { cartState, removeFromCart } from "$lib/state/cart.state.svelte";
  import Close from "./icons/Close.svelte";
  import Trash from "./icons/Trash.svelte";
</script>

<aside
  class="fixed top-0 right-0 h-full w-80 bg-stone-100 z-50 shadow-xl flex flex-col justify-between
         transform transition-transform duration-300
         {cartState.open ? 'translate-x-0' : 'translate-x-full'}"
>
  <div>
    <div
      class="flex items-center justify-between p-4 border-b border-b-stone-400"
    >
      <h2>Your Cart</h2>
      <button aria-label="Close menu" onclick={() => (cartState.open = false)}>
        <Close></Close>
      </button>
    </div>

    <div class="p-4 space-y-4">
      {#if cartState.items.length === 0}
        <p>Your cart is empty.</p>
      {:else}
        {#each cartState.items as item, i}
          <div
            class="flex justify-between items-center border-b border-b-stone-400 pb-2"
          >
            <div>
              <p class="font-bold">{item.name}</p>
              <p>SEK {item.price}</p>
              <input
                class="border border-stone-400 rounded-full py-1 px-2 w-16 my-2"
                max="9"
                min="1"
                type="number"
                value={item.quantity}
              />
            </div>

            <button
              aria-label="Remove item"
              onclick={() => {
                removeFromCart(i);
              }}
            >
              <Trash></Trash></button
            >
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <div class="p-4 border-t border-t-stone-400 space-y-4">
    <div class="flex justify-between">
      <p>Total</p>
      <p>SEK 400</p>
    </div>

    <button
      class="w-full bg-stone-950 text-stone-100 rounded-full py-4 px-6 hover:bg-stone-900 transition-colors duration-300"
      >Checkout</button
    >
  </div>
</aside>
