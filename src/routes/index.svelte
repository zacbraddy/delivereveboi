<script>
  import LabelledInput from "../components/atoms/LabelledInput.svelte";
  import DarkModeButton from "../components/atoms/DarkModeButton.svelte";
  import Header from "../components/molecules/Header.svelte";
  import StartRun from "../components/molecules/StartRun.svelte";
</script>

<svelte:head>
  <title>Delivereve Boi</title>
</svelte:head>

<DarkModeButton />

<Header />

<LabelledInput id="startingIsk">Starting isk value</LabelledInput>

<StartRun />
