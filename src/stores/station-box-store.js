import { get, writable } from "svelte/store";
import stations from "./stations.js";

const store = writable({ currentBoxes: [], stationsVisited: [] });
const { subscribe, set } = store;

const updateLocalStorage = (newRunValue) => {
  localStorage.setItem("runStationBoxes", JSON.stringify(newRunValue));
};

const setStationToAdd = (newStationId) => {
  const currentStore = get(store);

  set({
    ...currentStore,
    nextStationToAdd: newStationId,
  });
};

const addStation = () => {
  const currentStore = get(store);
  const { currentBoxes, nextStationToAdd } = currentStore;

  const stationData = stations.find((s) => s.id === nextStationToAdd) || {};

  currentBoxes.push({
    id: nextStationToAdd,
    displayName: stationData.displayName,
    boxes: 1,
  });

  const newBoxesValue = {
    ...currentStore,
    currentBoxes: currentBoxes.sort((a, b) =>
      a.displayName < b.displayName ? -1 : 1
    ),
  };

  set(newBoxesValue);
  updateLocalStorage(newBoxesValue);
};

const incrementStation = (stationId) => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const stationIndex = currentBoxes.findIndex((sb) => sb.id === stationId);

  currentBoxes[stationIndex].boxes += 1;

  set({ ...currentStore, currentBoxes });
};

const decrementStation = (stationId) => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const stationIndex = currentBoxes.findIndex((sb) => sb.id === stationId);

  currentBoxes[stationIndex].boxes =
    currentBoxes[stationIndex].boxes > 1
      ? currentBoxes[stationIndex].boxes - 1
      : 1;

  set({ ...currentStore, currentBoxes });
};

const deliverToStation = (stationId) => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const stationIndex = currentBoxes.findIndex((sb) => sb.id === stationId);

  const stationVisited = currentBoxes.splice(stationIndex, 1);

  currentStore.stationsVisited.push(stationVisited);

  set({ ...currentStore, currentBoxes });
};

export default {
  addStation,
  decrementStation,
  deliverToStation,
  incrementStation,
  setStationToAdd,
  subscribe,
};
