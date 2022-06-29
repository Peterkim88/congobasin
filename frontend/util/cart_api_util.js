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

export const createItem = (item) => (
  $.ajax({
    method: 'POST',
    url: `api/cart_items/${item.id}`,
    data: {item}
  })
)

export const updateItem = (item) => (
  $.ajax({
    method: 'PATCH',
    url: `api/cart_items/${item.id}`,
    data: {item}
  })
)

export const deleteItem = (item) => (
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items`
  })
)