import { useSyncExternalStore } from "react";

// One global pause state for every autoplaying video (WCAG 2.2.2). The choice
// carries across pages, as in the design.

let paused = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function toggleVideosPaused() {
  paused = !paused;
  listeners.forEach((l) => l());
}

export function getVideosPaused() {
  return paused;
}

export function subscribeVideosPaused(listener: () => void) {
  return subscribe(listener);
}

export function useVideosPaused() {
  return useSyncExternalStore(subscribe, getVideosPaused, () => false);
}
