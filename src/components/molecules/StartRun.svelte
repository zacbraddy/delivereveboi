<script>
  import ActionButton from "../atoms/ActionButton.svelte";
  import currentRunStore from "../../stores/current-run-store";
</script>

<ActionButton id="startRun" on:click={currentRunStore.storeStartingIsk}>
  <i class="fas fa-rocket p-4" /> Tell me your opening balance and then we can get
  this run started!
</ActionButton>
