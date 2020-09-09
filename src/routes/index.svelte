<script>
  import { onMount } from "svelte";
  import DarkModeButton from "../components/atoms/DarkModeButton.svelte";
  import LabelledInput from "../components/molecules/LabelledInput.svelte";
  import Header from "../components/molecules/Header.svelte";
  import StartRun from "../components/molecules/StartRun.svelte";
  import EndRun from "../components/molecules/EndRun.svelte";
  import ResetRun from "../components/molecules/ResetRun.svelte";
  import currentRunStore from "../stores/current-run-store.js";

  onMount(() => {
    currentRunStore.loadFromLocalStorage();
  });

  function onStartingIskChange(ev) {
    currentRunStore.setStartingIsk(ev.target.value);
  }

  function onEndingIskChange(ev) {
    currentRunStore.setEndingIsk(ev.target.value);
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
