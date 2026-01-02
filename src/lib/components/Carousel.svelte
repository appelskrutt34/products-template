<div class="relative overflow-hidden">
  <div class="marquee flex w-max" style="animation-duration: 10s">
    <div class="flex px-4">
      <slot />
    </div>
    <div class="flex px-4" aria-hidden="true">
      <slot />
    </div>
  </div>
  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-24 z-10
           bg-linear-to-r from-stone-950 to-transparent"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-24 z-10
           bg-linear-to-l from-stone-950 to-transparent"
  ></div>
</div>

<style>
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .marquee {
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    will-change: transform;
  }
</style>
