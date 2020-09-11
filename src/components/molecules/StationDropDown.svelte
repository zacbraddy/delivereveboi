<script>
  import stations from "../../stores/stations";
</script>

<div class="my-4 w-full">
  <label class="font-bold"><slot /></label>
  <select class="w-full p-2 rounded-lg bg-secondary text-secondary">
    <option value="default" class="bg-primary">Select a Station</option>
    {#each stations as s}
      <option value={s.id} class="bg-primary">{s.displayName}</option>
    {/each}
  </select>
</div>
