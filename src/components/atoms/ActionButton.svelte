<script>
  export let id;
  export let addClasses = "bg-active";
</script>

<style>
  button {
    @apply outline-none;
  }
</style>

<button
  {id}
  on:click
  class={`w-full flex justify-center items-center
    text-inverse tracking-wider my-4 p-4 rounded text-lg ${addClasses}`}>
  <slot />
</button>
