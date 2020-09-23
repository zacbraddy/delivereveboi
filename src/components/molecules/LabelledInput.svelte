<script>
  export let id;
  export let readonly = false;
  export let readonlyContent = "";
</script>

<style>
  label,
  input,
  div {
    font-family: "Source Code Pro", monospace;
  }
</style>

<div class="my-4">
  <label class="font-bold" for={id}>
    <slot />
  </label>
  {#if readonly}
    <div
      {id}
      class="text-secondary py-2 px-2 block w-full font-bold leading-normal
        text-left truncate">
      {readonlyContent}
    </div>
  {:else}
    <input
      {id}
      type="number"
      on:input
      on:change
      class="bg-primary text-secondary py-2 px-2 block w-full appearance-none
        leading-normal border rounded-lg focus:outline-none border-secondary
        text-left select-none truncate shadow-md" />
  {/if}
</div>
