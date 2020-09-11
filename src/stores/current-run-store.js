import { get, writable } from "svelte/store";

const store = writable({});
const { subscribe, set } = store;

const updateLocalStorage = (newRunValue) => {
  localStorage.setItem("currentRun", JSON.stringify(newRunValue));
};

const setStartingIsk = (newStartingIskValue) => {
  const currentStore = get(store) || {};

  currentStore.startingIsk = newStartingIskValue;

  set(currentStore);
};

const setStartingStation = (newStartingStation) => {
  const currentStore = get(store);

  currentStore.startingStation = newStartingStation;

  set(currentStore);
};

const setEndingIsk = (newEndingIskValue) => {
  const currentStore = get(store);

  currentStore.endingIsk = newEndingIskValue;

  set(currentStore);
};

const startRun = () => {
  const currentStore = get(store);

  currentStore.startingIsk = currentStore.startingIsk || 0;
  currentStore.runInProgress = true;

  set(currentStore);
  updateLocalStorage(get(store));
};

const endRun = () => {
  const currentStore = get(store);

  currentStore.endingIsk = currentStore.endingIsk || 0;

  currentStore.profit = currentStore.endingIsk - currentStore.startingIsk;
  currentStore.runComplete = true;

  updateLocalStorage(get(store));

  set(currentStore);
};

const resetRun = () => {
  set({});
  updateLocalStorage({});
};

const loadFromLocalStorage = () => {
  set(JSON.parse(localStorage.getItem("currentRun")) || {});
};

export default {
  subscribe,
  startRun,
  setStartingIsk,
  setStartingStation,
  setEndingIsk,
  endRun,
  resetRun,
  loadFromLocalStorage,
};
