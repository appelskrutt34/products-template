<script>
  import ArrowRight from "$lib/components/icons/ArrowRight.svelte";

  const qas = [
    {
      q: "Lorem ipsum dolor sit amet ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      q: "At vero eos et accusamus et iusto odio dignissimos ducimus qui ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    },
    {
      q: "Ut enim ad minima veniam ?",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  let currentQA = $state(0);

  const activeClass =
    "before:opacity-100 after:opacity-100 after:translate-x-0";
</script>

<section
  class="py-28 flex justify-center bg-stone-950 w-full text-stone-100"
  id="qa"
>
  <div class="container flex flex-col gap-12 w-full">
    <h1>Frequently Asked Questions</h1>

    <div class="flex gap-12 w-full">
      <div class="space-y-4 w-[50%]">
        {#each qas as qa, i}
          <button
            onclick={() => (currentQA = i)}
            class="p-4 bg-linear-to-r from-stone-900 to-transparent flex items-center justify-between w-full hover:brightness-130 overflow-hidden relative pl-4 before:absolute before:left-0 before:top-0
    before:h-full before:w-0.5 before:bg-stone-100
    before:opacity-0

    after:absolute after:left-1 after:top-0
    after:h-full after:w-8
    after:bg-linear-to-r after:from-stone-500/60 after:to-transparent
    after:blur-md after:opacity-0 after:-translate-x-1

    before:transition-opacity before:duration-300
    after:transition-all after:duration-300
            {i == currentQA ? activeClass : ''}"
          >
            <p class="max-w-[80%] text-left">{qa.q}</p>
            <ArrowRight></ArrowRight>
          </button>
        {/each}
      </div>
      <div class="w-[50%]">
        <p>{qas[currentQA].a}</p>
      </div>
    </div>
  </div>
</section>
