import { AppState } from '../redux/store';

/**
 * Loads the application state from localStorage. This function attempts to retrieve the
 * state saved under the key 'state' in localStorage, parse it from JSON string back to
 * an object, and return it. If the state does not exist or an error occurs during parsing,
 * it handles the situation gracefully by returning `undefined`.
 *
 * @returns {Partial<AppState> | undefined} The state parsed from localStorage or undefined if no state is found
 * or an error occurs.
 */
export const loadState = (): Partial<AppState> | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as Partial<AppState>;
  } catch (err) {
    console.error('Failed to load state from localStorage:', err);
    return undefined;
  }
};

/**
 * Saves the given state to localStorage. This function serializes the state to a JSON string
 * and saves it under the key 'state' in localStorage. If an error occurs during serialization
 * or while saving to localStorage, it logs an error to the console.
 *
 * @param {Partial<AppState>} state - The state object that needs to be serialized and saved.
 */
export const saveState = (state: Partial<AppState>): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
};
