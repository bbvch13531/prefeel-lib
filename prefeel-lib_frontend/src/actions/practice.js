export const DIRECTORY_TOGGLE = 'DIRECTORY_TOGGLE ';
export const LINTER_TOGGLE = 'LINTER_TOGGLE ';

export const toggleDirectory = () => {
  return {
    type: DIRECTORY_TOGGLE,
  };
}

export const toggleLinter = () => {
  return {
    type: LINTER_TOGGLE,
  };
}