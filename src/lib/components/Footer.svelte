<script>
  import Discord from "./icons/Discord.svelte";
  import Instagram from "./icons/Instagram.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
</script>

<footer
  class="border-t border-t-stone-500 flex justify-center gap-12 py-4 bg-stone-950 w-full bg-[linear-gradient(109deg,var(--color-stone-950)_11.64%,var(--color-stone-800)_49.04%,var(--color-stone-950)_86.45%,transparent_100%)]"
>
  <a
    aria-label="Discord"
    href="#"
    target="_blank"
    class="bg-stone-950 p-4 rounded-full hover:bg-stone-500 group transition-colors duration-300"
    ><Discord
      size="24"
      customClass="fill-stone-100 group-hover:fill-sky-700 transition-colors duration-300"
    ></Discord></a
  >
  <a
    aria-label="Linkedin"
    href="#"
    target="_blank"
    class="bg-stone-950 p-4 rounded-full hover:bg-stone-500 group transition-colors duration-300"
    ><Linkedin
      size="24"
      customClass="fill-stone-100 group-hover:fill-green-700 transition-colors duration-300"
    ></Linkedin></a
  >
  <a
    aria-label="Instagram"
    href="#"
    target="_blank"
    class="bg-stone-950 p-4 rounded-full hover:bg-stone-500 group transition-colors duration-300"
    ><Instagram
      size="24"
      customClass="fill-stone-100 group-hover:fill-purple-700 transition-colors duration-300"
    ></Instagram></a
  >
</footer>
