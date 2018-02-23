export const DIRECTORY_BAR_TOGGLE = 'DIRECTORY_BAR_TOGGLE ';
export const LINTER_BAR_TOGGLE = 'LINTER_BAR_TOGGLE ';

export const toggleDirectoryBar = () => {
  return {
    type: DIRECTORY_BAR_TOGGLE,
  };
}

export const toggleLinterBar = () => {
  return {
    type: LINTER_BAR_TOGGLE,
  };
}