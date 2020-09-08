<script>
  export let id;
</script>

<style>
  button {
    @apply outline-none;
  }
</style>

<button
  {id}
  on:click
  class="w-full flex justify-center items-center bg-active text-inverse my-4 p-4
    rounded text-lg">
  <slot />
</button>
