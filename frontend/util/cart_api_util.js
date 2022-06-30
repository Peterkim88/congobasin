export const showAllItems = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/user/${userId}/cart_items`
  })
)

export const showOneItem = (item) => (
  $.ajax({
    method: 'GET',
    url: `api/cart_items/${item.id}`,
    data: {item}
  })
)

export const createItem = (userId) => (
  $.ajax({
    method: 'POST',
    url: `api/user/${userId}/cart_items`,
    data: {item}
  })
)

export const updateItem = (userId, item) => (
  $.ajax({
    method: 'PATCH',
    url: `api/user/${userId}/cart_items/${item.id}`,
    data: {cart_item: item}
  })
)

export const deleteItem = (userId, item) => (
  $.ajax({
    method: 'DELETE',
    url: `api/user/${userId}/cart_items/${item.id}`
  })
)