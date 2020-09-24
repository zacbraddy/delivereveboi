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

  const newBoxesValue = { ...currentStore, currentBoxes };

  set(newBoxesValue);
  updateLocalStorage(newBoxesValue);
};

const decrementStation = (stationId) => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const stationIndex = currentBoxes.findIndex((sb) => sb.id === stationId);

  currentBoxes[stationIndex].boxes =
    currentBoxes[stationIndex].boxes > 1
      ? currentBoxes[stationIndex].boxes - 1
      : 1;

  const newBoxesValue = { ...currentStore, currentBoxes };

  set(newBoxesValue);
  updateLocalStorage(newBoxesValue);
};

const deliverToStation = (stationId) => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const stationIndex = currentBoxes.findIndex((sb) => sb.id === stationId);

  const stationVisited = currentBoxes.splice(stationIndex, 1);

  currentStore.stationsVisited.push(stationVisited);

  const newBoxesValue = { ...currentStore, currentBoxes };

  set(newBoxesValue);
  updateLocalStorage(newBoxesValue);
};

const loadFromLocalStorage = () => {
  set(
    JSON.parse(localStorage.getItem("runStationBoxes")) || {
      currentBoxes: [],
      stationsVisited: [],
    }
  );
};

const clearLocalStorage = () => {
  updateLocalStorage({
    currentBoxes: [],
    stationsVisited: [],
  });
};

const getNextBestDestination = () => {
  const currentStore = get(store);
  const { currentBoxes } = currentStore;

  const bestStation = currentBoxes.reduce((currentBest, currentValue) =>
    currentValue.boxes > currentBest.boxes ? currentBest : currentValue
  );

  return bestStation.displayName;
};

export default {
  addStation,
  clearLocalStorage,
  decrementStation,
  deliverToStation,
  getNextBestDestination,
  incrementStation,
  loadFromLocalStorage,
  setStationToAdd,
  subscribe,
};
