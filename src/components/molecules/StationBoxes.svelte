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

<div
  class="station flex flex-col border border-primary rounded p-2 my-4
    md:flex-row">
  <div class="flex items-center space-x-4 flex-grow justify-between">
    <div>{stationBox.displayName}</div>
    <div class="number-of-boxes text-secondary font-bold">
      {stationBox.boxes}
    </div>
  </div>
  <div class="md:flex md:justify-end">
    <div class="flex justify-between my-2 md:flex-col-reverse md:mx-4">
      <button
        on:click={decrementBoxes}
        class="subtract-button w-full md:w-24 h-8 bg-danger font-xl font-bold
          text-inverse rounded-l md:rounded-l-none md:rounded-b">-</button>
      <button
        on:click={incrementBoxes}
        class="add-button w-full h-8 md:w-24 bg-active font-xl font-bold
          text-inverse rounded-r md:rounded-r-none md:rounded-t">+</button>
    </div>
    <div class="my-2">
      <button
        on:click={deliverToStation}
        class="deliver-button w-full h-8 bg-active font-xl font-bold
          text-inverse rounded md:p-4 md:h-16">Deliver</button>
    </div>
  </div>
</div>
