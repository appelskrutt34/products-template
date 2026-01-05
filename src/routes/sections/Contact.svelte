<script>
  import Bubble from "$lib/components/icons/Bubble.svelte";
  import Discord from "$lib/components/icons/Discord.svelte";
  import Email from "$lib/components/icons/Email.svelte";
  import Phone from "$lib/components/icons/Phone.svelte";
  import Pin from "$lib/components/icons/Pin.svelte";
</script>

<section
  id="contact"
  class="w-full flex flex-col items-center bg-stone-100 py-28 text-violet-700"
>
  <h1 class="mb-16">Contact Us</h1>
  <div class="container flex">
    <div class="flex-1">
      <h2 class="mb-4">Subtitle Here</h2>
      <p class="pr-8 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul class="space-y-4">
        <li class="flex items-center gap-2 text-lg">
          <Phone></Phone> 076 01 01 111
        </li>
        <li class="flex items-center gap-2 text-lg">
          <Pin></Pin> Huskvarna vägen 3, Huskvarna
        </li>
        <li class="flex items-center gap-2 text-lg">
          <Email></Email> software@business.com
        </li>
      </ul>
    </div>
    <div class="flex-1 flex flex-col gap-12">
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
          <Bubble customClass="fill-violet-700" size="44"></Bubble> Chat
        </h2>
        <p class="text-left">
          Contact support for technical questions, bug reports, or assistance
          with our services.
        </p>
      </button>
    </div>
  </div>
</section>
