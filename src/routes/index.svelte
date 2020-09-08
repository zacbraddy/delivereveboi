<script>
  import LabelledInput from "../components/atoms/LabelledInput.svelte";
  import DarkModeButton from "../components/atoms/DarkModeButton.svelte";
  import Header from "../components/molecules/Header.svelte";
  import StartRun from "../components/molecules/StartRun.svelte";
  import currentRunStore from "../stores/current-run-store.js";

  function onStartingIskChange(ev) {
    currentRunStore.setStartingIsk(ev.target.value);
  }
</script>

<svelte:head>
  <title>Delivereve Boi</title>
</svelte:head>

<DarkModeButton />

<Header />

<LabelledInput id="startingIsk" on:input={onStartingIskChange}>
  Starting isk value
</LabelledInput>

<StartRun />
