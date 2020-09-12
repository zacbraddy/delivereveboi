<script>
  import { createEventDispatcher } from "svelte";
  import stations from "../../stores/stations";

  export let id;
  export let readonly = false;
  export let readonlyContent = "";

  const dispatch = createEventDispatcher();

  function stationChange(ev) {
    dispatch("stationChange", {
      newStation: ev.target.value,
    });
  }
</script>

<div class="my-4 w-full">
  <label for={id} class="font-bold"><slot /></label>
  {#if readonly}
    <div
      {id}
      class="text-secondary py-2 px-2 block w-full font-bold leading-normal
        text-left truncate">
      {readonlyContent}
    </div>
  {:else}
    <select
      {id}
      on:change={stationChange}
      class="w-full p-2 rounded-lg bg-secondary text-secondary">
      <option value="default" class="bg-primary">Select a Station</option>
      {#each stations as s}
        <option value={s.id} class="bg-primary">{s.displayName}</option>
      {/each}
    </select>
  {/if}
</div>
