import { ADD_TODO } from "./actionType";
//action creator

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
