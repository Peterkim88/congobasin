import * as APIUtil from '../util/cart_api_util';

export const SHOW_ITEMS = 'SHOW_ITEMS';
export const SHOW_ITEM = 'SHOW_ITEM';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const showItems = (items) => ({
  type: SHOW_ITEMS,
  items
});

export const showItem = item => ({
  type: SHOW_ITEM,
  item
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

// export const updateCurrentItem = (item) => ({
//   type: UPDATE_ITEM,
//   item
// });

export const deleteCurrentItem = (item) => ({
  type: DELETE_ITEM,
  item
});

export const showAllItems = (userId) => dispatch => (
  APIUtil.showAllItems(userId)
    .then(items => (dispatch(showItems(items))))
);

export const showOneItem = (item) => dispatch => (
  APIUtil.showOneItem(item)
)

export const createItem = (userId) => dispatch => (
  APIUtil.createItem(userId)
    .then(item => (dispatch(receiveItem(item))))
);

export const updateItem = (item) => dispatch => (
  APIUtil.updateItem(item)
    .then(item => (dispatch(receiveItem(item))))
)

export const deleteItem = (userId, item) => dispatch => (
  APIUtil.deleteItem(userId, item)
    .then(item => (dispatch(deleteCurrentItem(item))))
);