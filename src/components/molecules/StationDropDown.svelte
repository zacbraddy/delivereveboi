<script>
  import { beforeUpdate, createEventDispatcher, onMount } from "svelte";
  import rawStations from "../../stores/stations";

  export let id;
  export let readonly = false;
  export let readonlyContent = "";
  export let hideLabel = false;
  export let removeStations = [];

  let stations = [];
  let currentlySelectedStation;

  const dispatch = createEventDispatcher();

  onMount(() => {
    stations = rawStations
      .filter((s) => removeStations.indexOf(s.id) === -1)
      .sort((a, b) => (a.displayName < b.displayName ? -1 : 1));

    setTimeout(() => {
      currentlySelectedStation = stations[0].id;

      dispatch("stationChange", {
        newStation: stations[0].id,
      });
    }, 100);
  });

  beforeUpdate(() => {
    stations = rawStations
      .filter((s) => removeStations.indexOf(s.id) === -1)
      .sort((a, b) => (a.displayName < b.displayName ? -1 : 1));
  });

  function stationChange(ev) {
    currentlySelectedStation = ev.target.value;

    dispatch("stationChange", {
      newStation: currentlySelectedStation,
    });
  }
</script>

<div class="my-4 w-full">
  <label for={id} class:hidden={hideLabel} class="font-bold"><slot /></label>
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
      bind:value={currentlySelectedStation}
      class="w-full p-2 rounded-lg bg-primary text-secondary border-secondary
        border rounded-lg focus:outline-none appearance-none">
      <option class="hidden" />
      {#each stations as s, i (s.id)}
        <option
          value={s.id}
          class="bg-primary"
          selected="{i === 0 ? 'selected' : ''}{s.displayName}">
          {s.displayName}
        </option>
      {/each}
    </select>
  {/if}
</div>
