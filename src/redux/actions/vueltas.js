// TODO: Async actions -> https://github.com/reduxjs/redux-thunk
export const dateUnaVueltaAction = (incremento = 1) => {
  return {
    type: "VUELTA",
    incremento
  };
};
