<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import DarkModeButton from "../components/atoms/DarkModeButton.svelte";
  import LabelledInput from "../components/molecules/LabelledInput.svelte";
  import Header from "../components/molecules/Header.svelte";
  import StartRun from "../components/molecules/StartRun.svelte";
  import EndRun from "../components/molecules/EndRun.svelte";
  import ResetRun from "../components/molecules/ResetRun.svelte";
  import StationDropDown from "../components/molecules/StationDropDown.svelte";
  import RunForm from "../components/organisms/RunForm.svelte";
  import currentRunStore from "../stores/current-run-store.js";

  onMount(() => {
    currentRunStore.loadFromLocalStorage();
  });

  function onStartingIskChange(ev) {
    currentRunStore.setStartingIsk(ev.target.value);
  }

  function onStartingStationChange(ev) {
    console.log("here", ev.detail);
    currentRunStore.setStartingStation(ev.detail.newStation);
    console.log("here1", get(currentRunStore));
  }

  function onEndingIskChange(ev) {
    currentRunStore.setEndingIsk(ev.target.value);
  }

  function getStationDisplayName(stationId) {
    return currentRunStore.getStationDisplayName(stationId);
  }
</script>

<svelte:head>
  <title>Delivereve Boi</title>
</svelte:head>

<DarkModeButton />

<Header />

<LabelledInput
  id="startingIsk"
  on:input={onStartingIskChange}
  on:change={onStartingIskChange}
  readonly={$currentRunStore.runInProgress}
  readonlyContent={$currentRunStore.startingIsk}>
  Starting isk value
</LabelledInput>

<StationDropDown
  id="startingStation"
  on:stationChange={onStartingStationChange}
  readonly={$currentRunStore.runInProgress}
  readonlyContent={getStationDisplayName($currentRunStore.startingStation)}>
  Starting station
</StationDropDown>

{#if $currentRunStore.runInProgress}
  <RunForm />
{/if}

{#if $currentRunStore.runInProgress}
  <LabelledInput
    id="endingIsk"
    on:input={onEndingIskChange}
    on:change={onEndingIskChange}
    readonly={$currentRunStore.runComplete}
    readonlyContent={$currentRunStore.endingIsk}>
    Ending isk value
  </LabelledInput>
{/if}

{#if $currentRunStore.runComplete}
  <LabelledInput
    id="profit"
    readonly={true}
    readonlyContent={$currentRunStore.profit}>
    Congrats you made this much isk shifting space stuff!
  </LabelledInput>
{/if}

{#if $currentRunStore.runComplete}
  <ResetRun />
{:else if $currentRunStore.runInProgress}
  <EndRun />
{:else}
  <StartRun />
{/if}
