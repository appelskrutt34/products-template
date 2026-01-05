<script>
  import Bubble from "$lib/components/icons/Bubble.svelte";
  import Discord from "$lib/components/icons/Discord.svelte";
</script>

<section
  id="contact"
  class="w-full flex flex-col items-center bg-stone-100 py-28 text-violet-700"
>
  <h1 class="mb-16">Contact And Support</h1>
  <div class="container flex gap-12">
    <button
      class="rounded-2xl border-2 border-violet-700 shadow-md p-6 flex-1 hover:shadow-lg transition-shadow duration-100"
    >
      <h2 class="flex items-center gap-6 mb-2">
        <Discord customClass="fill-violet-700" size="44"></Discord> Discord Community
      </h2>
      <p class="text-left">
        Join our Discord to connect with our team, ask questions, share ideas,
        and stay up to date with announcements and ongoing discussions.
      </p>
    </button>
    <button
      class="rounded-2xl border-2 border-violet-700 shadow-md p-6 flex-1 hover:shadow-lg transition-shadow duration-100"
    >
      <h2 class="flex items-center gap-6 mb-2">
        <Bubble customClass="fill-violet-700" size="44"></Bubble> Chat With Us
      </h2>
      <p class="text-left">
        Contact support for technical questions, bug reports, or assistance with
        our services.
      </p>
    </button>
  </div>
</section>
