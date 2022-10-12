<script lang="ts">
  import { fade } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView;
</script>

<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    <div in:fade class="flex flex-row justify-between">
      <slot/>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    margin-top: 30px;
  }
</style>