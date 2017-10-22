import { SET_BUDGET, ADD_ITEM, REMOVE_ITEM } from "./actions";
import { fromJS } from "immutable";

const initialState = fromJS({
  budget: null,
  items: [{ name: "Flight", price: 604 }]
});

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUDGET:
      return state.set("budget", action.budget);
    case ADD_ITEM:
      const { name, price } = action;
      return state.update("items", items =>
        items.push(
          fromJS({
            name,
            price
          })
        )
      );
    case REMOVE_ITEM:
      return state;
    default:
      return state;
  }
}

export default cartReducer;

export function calcBudgetRemaining(state) {
  const budget = state.get("cart").get("budget");
  if (!budget) return 0;
  const items = state
    .get("cart")
    .get("items")
    .toJS();
  const budgetSpent = items.reduce((acc, item) => acc + item.price, 0);
  return budget - budgetSpent;
}

export function selectLastItemAdded(state) {
  return state
    .get("cart")
    .get("items")
    .last()
    .toJS();
}

export function getItems(state) {
  return state
    .get("cart")
    .get("items")
    .toJS();
}

export function isSeatingChosen(state) {
  const items = getItems(state);
  return items.reduce(
    (seatingSeen, item) => seatingSeen || item.name.indexOf("Seat") !== -1,
    false
  );
}
