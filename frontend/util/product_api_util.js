export const create_product = product => (
  $.ajax({
    method: 'POST',
    url: 'api/products',
    data: {product}
  })
)

export const showOneProduct = productId => (
  $.ajax({
    method: 'GET',
    url: `api/products/${productId}`
  })
)

export const showAllProducts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/products'
  })
)