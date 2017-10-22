export const SET_BUDGET = "SET_BUDGET";

export function setBudget(budget) {
  return {
    type: SET_BUDGET,
    budget
  };
}

export const ADD_ITEM = "ADD_ITEM";

export function addItem(name, price) {
  return {
    type: ADD_ITEM,
    name,
    price
  };
}

export const REMOVE_ITEM = "REMOVE_ITEM";

export function removeItem(name) {
  return {
    type: REMOVE_ITEM,
    name
  };
}
