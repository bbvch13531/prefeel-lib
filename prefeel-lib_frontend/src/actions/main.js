export const LIBRARY_SHOW = 'LIBRARY_SHOW';

export function showLibrary (library) {
  return {
    type: LIBRARY_SHOW,
    payload: library,
  };
}