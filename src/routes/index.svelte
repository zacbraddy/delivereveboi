<script>
  import LabelledInput from "../components/atoms/LabelledInput.svelte";
  import DarkModeButton from "../components/atoms/DarkModeButton.svelte";
  import Header from "../components/molecules/Header.svelte";
  import StartRun from "../components/molecules/StartRun.svelte";
  import EndRun from "../components/molecules/EndRun.svelte";
  import currentRunStore from "../stores/current-run-store.js";

  function onStartingIskChange(ev) {
    currentRunStore.setStartingIsk(ev.target.value);
  }

  function onRunStarted() {}
</script>

<svelte:head>
  <title>Delivereve Boi</title>
</svelte:head>

<DarkModeButton />

<Header />

<LabelledInput
  id="startingIsk"
  on:input={onStartingIskChange}
  on:change={onStartingIskChange}>
  Starting isk value
</LabelledInput>

{#if $currentRunStore.runInProgress}
  <EndRun />
{:else}
  <StartRun />
{/if}
