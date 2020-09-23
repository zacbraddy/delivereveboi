<script>
  import ActionButton from "../atoms/ActionButton.svelte";
  import currentRunStore from "../../stores/current-run-store";
  import stationBoxStore from "../../stores/station-box-store";

  function resetRun() {
    currentRunStore.resetRun();
    stationBoxStore.clearLocalStorage();
  }
</script>

<ActionButton id="resetRun" addClasses="bg-danger" on:click={resetRun}>
  <i class="far fa-trash-alt p-4" /> Reset your run log and start a new run
</ActionButton>
