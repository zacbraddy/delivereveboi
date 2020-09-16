<script>
  import AddStation from "../molecules/AddStation.svelte";
  import StationDropDown from "../molecules/StationDropDown.svelte";
</script>

<div id="runForm" class="border rounded p-6 border-secondary">
  <h3 class="my-4 font-bold font-lg">Current Route</h3>
  <div class="border rounded p-4 border-primary">
    <StationDropDown />
    <AddStation>Add this station to your route</AddStation>
  </div>
</div>
