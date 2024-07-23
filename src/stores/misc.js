import { writable, derived, get } from "svelte/store";

const sides = {
	left: 0,
	right: 0
};
export let side = writable("left");
export let scrollY = writable(0);

// export let prev = derived(
// 	[side, scrollY],
// 	([$side, $scrollY], set) => {
// 		sides[$side] = $scrollY;
// 		set(sides);
// 	},
// 	sides
// );

export let prev = writable(sides);

export let productHeight = writable(0);
