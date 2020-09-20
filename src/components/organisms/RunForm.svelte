<script>
  import AddStation from "../molecules/AddStation.svelte";
  import StationDropDown from "../molecules/StationDropDown.svelte";
  import stationBoxesStore from "../../stores/station-box-store.js";

  function onAddStationChange(ev) {
    stationBoxesStore.setStationToAdd(ev.detail.newStation);
  }

  function addStation(ev) {
    stationBoxesStore.addStation();
  }
</script>

<div id="runForm" class="border rounded p-6 border-secondary">
  <h3 class="my-4 font-bold font-lg">Current Route</h3>
  <div class="border rounded p-4 border-primary">
    {#each $stationBoxesStore as sb}
      <div class="station">
        <div>{sb.displayName}</div>
        <div>{sb.boxes}</div>
      </div>
    {/each}
    <StationDropDown
      id="addStation"
      on:stationChange={onAddStationChange}
      removeStations={$stationBoxesStore.map((s) => s.id)}
      hideLabel={true}>
      Select a station to add
    </StationDropDown>
    <AddStation on:click={addStation}>
      Add this station to your route
    </AddStation>
  </div>
</div>
