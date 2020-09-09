import { get, writable } from "svelte/store";

const store = writable({});
const { subscribe, set } = store;

const updateLocalStorage = (newRunValue) => {
  localStorage.setItem("currentRun", JSON.stringify(newRunValue));
};

const setStartingIsk = (newStartingIskValue) => {
  const newRunValue = { startingIsk: newStartingIskValue };
  set(newRunValue);
};

const setEndingIsk = (newEndingIskValue) => {
  const currentStore = get(store);

  currentStore.endingIsk = newEndingIskValue;

  set(currentStore);
};

const setRunInProgress = (newRunInProgressValue) => {
  const currentStore = get(store);

  currentStore.runInProgress = newRunInProgressValue;

  set(currentStore);
};

const storeStartingIsk = () => {
  updateLocalStorage(get(store));
};

const endRun = () => {
  const currentStore = get(store);

  currentStore.profit =
    (currentStore.endingIsk || 0) - (currentStore.startingIsk || 0);
  currentStore.runComplete = true;

  updateLocalStorage(get(store));

  set(currentStore);
};

export default {
  subscribe,
  setRunInProgress,
  setStartingIsk,
  setEndingIsk,
  storeStartingIsk,
  endRun,
};
