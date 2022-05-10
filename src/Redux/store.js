const { createStore } = require("redux");
const { reducer } = require("./reducer");

export const store = createStore(reducer);
