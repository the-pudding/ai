import { writable } from "svelte/store";

export let side = writable("left");
export let currentVideoId = writable(undefined);
export let currentVideoY = writable(undefined);
