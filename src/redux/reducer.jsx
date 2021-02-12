import { ADD_ITEM, DELETE_ITEM } from './actions';

const INITIAL_STATE = {
  wishList: [],
  newItem: '',
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!action.payload) {
        alert('Please add something to your wish list!');
        return {
          ...state,
        };
      }
      if (INITIAL_STATE.wishList.includes(action.payload)) {
        alert('You already added that!');
        return {
          ...state,
        };
      }

      const newItem = action.payload;
      console.log('action payload', action);
      console.log('state', state.wishList);

      let newList = state.wishList;
      newList.push(newItem);
      return {
        ...state,
        wishList: newList,
      };

    case DELETE_ITEM:
      // using the delete item case to delete everything, passing in payload as empty array
      if (typeof action.payload != 'number') {
        return {
          ...state,
          wishList: [],
          newItem: '',
        };
      }

      let list = state.wishList;
      let index = action.payload;
      list.splice(index, 1);

      return {
        // ...state,
        wishList: list,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
