import { get, writable } from "svelte/store";

const store = writable({});
const { subscribe, set, update } = store;

const updateLocalStorage = (newRunValue) => {
  localStorage.setItem("currentRun", JSON.stringify(newRunValue));
};

const setStartingIsk = (newStartingIskValue) => {
  const newRunValue = { startingIsk: newStartingIskValue };
  set(newRunValue);
};

const storeStartingIsk = () => {
  updateLocalStorage(get(store));
};

export default {
  subscribe,
  setStartingIsk,
  storeStartingIsk,
};
