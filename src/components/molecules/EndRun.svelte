<script>
  import ActionButton from "../atoms/ActionButton.svelte";

  import currentRunStore from "../../stores/current-run-store.js";

  function endRun() {
    currentRunStore.endRun();
  }
</script>

<ActionButton id="endRun" addClasses="bg-danger" on:click={endRun}>
  <i class="fas fa-truck-loading p-4" /> End your delivery run here
</ActionButton>
