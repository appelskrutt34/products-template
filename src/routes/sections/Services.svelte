<script>
  import { services } from "$lib/data/data.js";
  import { fade } from "svelte/transition";
  import Service from "./components/Service.svelte";
  import Category from "./components/Service.svelte";
  let currentCategory = $state(0);
  const activeClass = "opacity-100";
</script>

<section class="w-full flex flex-col items-center text-stone-100" id="services">
  <div class="border-stone-500 flex justify-center border-b w-full">
    <nav class="container">
      <div class="flex">
        {#each services as service, i}
          <button
            onclick={() => (currentCategory = i)}
            class="text-center relative flex-1 group p-6 border-r border-stone-500 last:border-r-0"
          >
            {service.name}
            <div
              class="
      absolute bottom-0 left-0 right-0 w-full h-0.5 bg-stone-100
      opacity-0 group-hover:opacity-100
      transition-all duration-300 {currentCategory == i ? activeClass : ''}
    "
            ></div>
          </button>
        {/each}
      </div>
    </nav>
  </div>
  {#key currentCategory}
    <div in:fade={{ duration: 300 }}>
      <Service service={services[currentCategory]} />
    </div>
  {/key}
</section>
