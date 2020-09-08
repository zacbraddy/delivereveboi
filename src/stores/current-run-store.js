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

const setRunInProgress = (newRunInProgressValue) => {
  const currentStore = get(store);

  currentStore.runInProgress = true;

  set(currentStore);
};

const storeStartingIsk = () => {
  updateLocalStorage(get(store));
};

export default {
  subscribe,
  setRunInProgress,
  setStartingIsk,
  storeStartingIsk,
};
