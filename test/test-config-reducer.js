// This file is a test store.
// It is used by ./store.js getStore() when a feature hasn't composed a store

let initialState = {
  timeZone: 'America/Chicago'
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
