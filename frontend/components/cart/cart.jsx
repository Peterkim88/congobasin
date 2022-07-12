import React from 'react';
import { showOneProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    const userId = this.props.userId
    this.props.showAllItems(userId)
  }

  selectProduct({products}, productId){
    selectProduct({products}, productId)
  }

  deleteCartItemButton(userId, item){
    return(
      <button className='cart-delete-button' 
        type="submit" 
        onClick={() => {this.props.deleteItem(userId, item)}}>
        Remove
      </button>
    )
  }

  // updateQuantity(userId, item){
  //   // let currentQuantity = item.quantity
  //   // let currentQuantity = ${`update-cart-${item.id}`}.current.value
  //   console.log(currentQuantity)
  //   return(
  //     // <form type='submit'
  //     //   onChange={
  //     //     () => this.props.updateItem(userId, item)
  //     //   }>   
  //     <form type='submit'>
  //       {/* <div {currentQuantity = parseInt(document.getElementById(`update-cart-${item.id}`))}> */}
  //       <div>
  //         <input 
  //           ref={`update-cart-${item.id}`}
  //           type="number" 
  //           value={item.quantity} />
  //         <button onClick={() => this.props.updateItem(userId, item)}>
  //           Update Quantity
  //         </button>
  //       </div>
  //       {/* {console.log(document.getElementById(`update-cart-${item.id}`))} */}
  //       {console.log(currentQuantity)}
  //     </form>
  //     // </form>
  //   )
  // }

  // updatedItem(item, newQuantity){
  //   const newItem = {
  //     id: item.id,
  //     user_id: item.user_id,
  //     product_id: item.product_id,
  //     quantity: newQuantity
  //   }
  //   return newItem;
  // }

  updateQuantity(userId, item){
    let newItem = item
    const handleQuantity = event => {
      const newQuantity = event.target.value
      return newItem.quantity = newQuantity;
    }
    return(
      <div>Qty:
        <input 
          className='update-quantity-input'
          ref={`update-cart-${item.id}`}
          type="number"
          onChange={handleQuantity} 
          defaultValue={item.quantity} />
        {' '}
        <button className='cart-update-quantity-button' 
          onClick={() => this.props.updateItem(userId, newItem)}>
          Update Quantity
        </button>
      </div>
    )
  }

  cartItems(){
    const userId = this.props.userId
    const items = Object.values(this.props.cartItems).map((item) => {
      return Object.values(this.props.products).map((product) => {
        if (product.id === item.product_id && this.props.userId !== null){
          return (
            <div className='cart-item-box' key={`cart-item-${item.id}`}>
              <div className='cart-product-info'>
                <div className='cart-product-image-box'>
                  <img className='cart-product-image' src={window[product.image_url]} alt='product-img' />
                </div>
                <div className='cart-product-details'>
                  <div className='cart-product-name'>
                    {product.product_name}
                  </div>
                  {/* <br /> */}
                  <div className='cart-product-price'>
                    Price: ${product.product_price} 
                    {/* {' '} */}
                    {/* Subtotal: ${(product.product_price * item.quantity).toFixed(2)} */}
                  </div>
                  <br />
                  {/* {console.log(item)} */}
                  <br />
                  <br />
                  <div className='cart-update-and-delete'>
                    {this.updateQuantity(userId, item)}
                    {this.deleteCartItemButton(userId, item)}
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })
    })
    if (items.length === 0){
      return(
        <div className='cart-empty-message'>
          <div className='cart-thank-you'>
            Thank you for shopping at Congo Basin!
          </div>
          <br />
          <div>
            <Link to='/' className='cart-link-to-homepage'>
              Click here to checkout products on our homepage!
            </Link>
          </div>
        </div>
      )  
    } else {
      return(
        items
      )
    }
  }

  checkOut(){
    const userId = this.props.userId;
    let subTotal = 0;
    let totalQuantity = 0;
    Object.values(this.props.cartItems).map((item) => {
      Object.values(this.props.products).map((product) => {
        if (product.id === item.product_id){
          subTotal += item.quantity * product.product_price;
          totalQuantity += item.quantity
        }
      })
    })
    return (
      <div className='cart-checkout-box'>
        <div className='cart-checkout-subtotal'>
          Subtotal ({totalQuantity} items) 
          <br />
          ${subTotal}
        </div>
        <br />
        <div>
          <button className='cart-checkout-button' 
            onClick={() => {
            Object.values(this.props.cartItems).map((item) => {
              this.props.deleteItem(userId, item)
            })
          }}>
            Checkout
          </button>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div className='cart-page'>
        <div className='cart-left-margin'></div>
        <div className='cart-all-items'>
          {this.cartItems()}
        </div>
        <div className='cart-checkout-container'>
          {this.checkOut()}
        </div>
        <div className='cart-right-margin'></div>
      </div>
    )
  }
}

export default Cart;