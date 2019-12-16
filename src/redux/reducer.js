import _ from "lodash";

const initState = {
  vueltas: 5,
  name: "Alberto Contador",
  color: "pink"
};

export const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "VUELTA":
      return {
        ...state,
        vueltas: state.vueltas + action.incremento,
        color: _.sample(["green", "blue", "red", "pink"])
      };
    default:
      return state;
  }
};
