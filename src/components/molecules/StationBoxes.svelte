<script>
  import stationBoxStore from "../../stores/station-box-store.js";

  export let stationBox;

  function incrementBoxes() {
    stationBoxStore.incrementStation(stationBox.id);
  }

  function decrementBoxes() {
    stationBoxStore.decrementStation(stationBox.id);
  }

  function deliverToStation() {
    stationBoxStore.deliverToStation(stationBox.id);
  }
</script>

<div class="station flex flex-col border border-primary rounded p-2 my-4">
  <div class="flex items-center space-x-4">
    <div>{stationBox.displayName}</div>
    <div class="number-of-boxes">{stationBox.boxes}</div>
  </div>
  <div class="flex justify-between my-2">
    <button
      on:click={decrementBoxes}
      class="subtract-button w-full h-8 bg-danger font-xl font-bold text-inverse
        rounded-l">-</button>
    <button
      on:click={incrementBoxes}
      class="add-button w-full h-8 bg-active font-xl font-bold text-inverse
        rounded-r">+</button>
  </div>
  <div class="my-2">
    <button
      on:click={deliverToStation}
      class="deliver-button w-full h-8 bg-active font-xl font-bold text-inverse
        rounded">Deliver</button>
  </div>
</div>
