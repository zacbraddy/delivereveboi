<script>
  export let id;
</script>

<style>
  label,
  input {
    font-family: "Source Code Pro", monospace;
  }
</style>

<div>
  <label class="font-bold" for={id}>
    <slot />
  </label>
  <input
    {id}
    type="number"
    on:input
    on:change
    class="bg-secondary text-secondary py-2 px-2 block w-full appearance-none
      leading-normal border border-transparent rounded-lg focus:outline-none
      text-left select-none truncate bg-white shadow-md" />
</div>
