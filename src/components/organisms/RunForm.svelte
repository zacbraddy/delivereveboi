<script>
  import AddStation from "../molecules/AddStation.svelte";
  import StationDropDown from "../molecules/StationDropDown.svelte";
  import StationBoxes from "../molecules/StationBoxes.svelte";
  import stationBoxesStore from "../../stores/station-box-store.js";

  function onAddStationChange(ev) {
    stationBoxesStore.setStationToAdd(ev.detail.newStation);
  }

  function addStation(ev) {
    stationBoxesStore.addStation();
  }
</script>

<div id="runForm">
  <h3 class="my-4 font-bold font-lg">Current Route</h3>
  <div class="border rounded p-4 border-secondary">
    {#each $stationBoxesStore as sb}
      <StationBoxes stationBox={sb} />
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
