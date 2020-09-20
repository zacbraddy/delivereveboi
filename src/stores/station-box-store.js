import { get, writable } from "svelte/store";
import stations from "./stations.js";

const store = writable([]);
const { subscribe, set } = store;

let nextStationToAdd = "";

const updateLocalStorage = (newRunValue) => {
  localStorage.setItem("currentRun", JSON.stringify(newRunValue));
};

const setStationToAdd = (newStationId) => {
  nextStationToAdd = newStationId;
};

const addStation = () => {
  const currentBoxes = get(store);

  const stationData = stations.find((s) => s.id === nextStationToAdd) || {};

  currentBoxes.push({
    id: nextStationToAdd,
    displayName: stationData.displayName,
    boxes: 1,
  });

  set(currentBoxes.sort((a, b) => (a.displayName < b.displayName ? -1 : 1)));
};

export default {
  subscribe,
  addStation,
  setStationToAdd,
};
