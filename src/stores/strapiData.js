import { writable } from "svelte/store";

export const projectData = writable([]);
// export function initialValue() {
//     return {
//         projects: new Map()
//     }
// }

// function unsubscribe() {

// }

// export function makeProjectStore(args) {
//     let initial = initialValue();
//     let store = readable(initial, makeSubscription(initial, args));
//     return store;
// }

// function makeSubscription(data, _args) {
//     return set => {
//         fetchProjectData(data, set);

//         return unsubscribe;
//     }
// }
