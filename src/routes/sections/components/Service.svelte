<script>
  import Check from "$lib/components/icons/Check.svelte";
  let { service } = $props();
</script>

<section class="flex container py-24">
  <div class="flex-1">
    <div class="flex gap-2 mb-2">
      {#each service.software as software}
        <a
          target="_blank"
          href={software.link}
          class="rounded-full {software.color} px-4 py-1 font-semibold hover:brightness-125 transition-all duration-300"
          >{software.name}</a
        >
      {/each}
    </div>
    <h1 class="mb-10">{service.name}</h1>
    <p class="mb-10">
      {service.description}
    </p>
    <ul class="space-y-3">
      {#each service.features as feature}
        <li class="flex items-center gap-1"><Check></Check> {feature}</li>
      {/each}
    </ul>
  </div>
  <div class="flex justify-center items-center flex-1">
    <img class="object-fit h-[400px]" src={service.image} alt="" />
  </div>
</section>
