import React from "react";
import { createStore } from "redux";

import { Provider } from "react-redux";
import Increment from "./components/Increment";

const initialState = {
  count: 0,
};

const store = createStore(reducer);
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Increment />
    </Provider>
  );
};

export default App;
