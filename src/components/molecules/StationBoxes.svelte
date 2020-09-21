<script>
  export let stationBox;
</script>

<div class="station flex flex-col border border-primary rounded p-2 my-4">
  <div class="flex items-center space-x-4">
    <div>{stationBox.displayName}</div>
    <div>{stationBox.boxes}</div>
  </div>
  <div class="flex justify-between my-2">
    <button
      class="subtract-button w-full h-8 bg-danger font-xl font-bold text-inverse
        rounded-l">-</button>
    <button
      class="add-button w-full h-8 bg-active font-xl font-bold text-inverse
        rounded-r">+</button>
  </div>
  <div class="my-2">
    <button
      class="add-button w-full h-8 bg-active font-xl font-bold text-inverse
        rounded">Deliver</button>
  </div>
</div>
