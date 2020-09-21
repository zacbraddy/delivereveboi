<script>
  import { beforeUpdate, createEventDispatcher, onMount } from "svelte";
  import rawStations from "../../stores/stations";

  export let id;
  export let readonly = false;
  export let readonlyContent = "";
  export let hideLabel = false;
  export let removeStations = [];

  let stations = [];
  let currentlySelectedStation = rawStations[0].id;

  const dispatch = createEventDispatcher();

  onMount(() => {
    stations = rawStations
      .filter((s) => removeStations.indexOf(s.id) === -1)
      .sort((a, b) => (a.displayName < b.displayName ? -1 : 1));

    currentlySelectedStation = stations[0].id;

    dispatch("stationChange", {
      newStation: stations[0].id,
    });
  });

  beforeUpdate(() => {
    stations = rawStations
      .filter((s) => removeStations.indexOf(s.id) === -1)
      .sort((a, b) => (a.displayName < b.displayName ? -1 : 1));

    if (!stations.find((s) => s.id === currentlySelectedStation)) {
      currentlySelectedStation = stations[0].id;

      dispatch("stationChange", {
        newStation: stations[0].id,
      });
    }
  });

  function stationChange(ev) {
    currentlySelectedStation = ev.target.value;

    dispatch("stationChange", {
      newStation: currentlySelectedStation,
    });
    console.log("stationchange end", currentlySelectedStation);
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
      class="w-full p-2 rounded-lg bg-secondary text-secondary">
      <option class="hidden" />
      {#each stations as s, i (s.id)}
        <option
          value={s.id}
          selected={i === 0 ? 'selected' : ''}
          class="bg-primary">
          {s.displayName}
        </option>
      {/each}
    </select>
  {/if}
</div>
