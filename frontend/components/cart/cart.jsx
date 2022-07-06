import React from 'react';
import { showOneProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';

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
      <button type="submit" onClick={() => {this.props.deleteItem(userId, item)}}>
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
      <div>
        <input 
          ref={`update-cart-${item.id}`}
          type="number"
          onChange={handleQuantity} 
          defaultValue={item.quantity} />
        <button onClick={() => this.props.updateItem(userId, newItem)}>
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
              {product.product_name}
              <br />
              Price: {product.product_price}
              <br />
              {/* {console.log(item)} */}
              quantity: {this.updateQuantity(userId, item)}
              <br />
              subtotal: {product.product_price * item.quantity}
              <br />
              {this.deleteCartItemButton(userId, item)}
              <br />
            </div>
          )
        }
      })
    })
    return(
      items
    )
  }

  render(){
    return(
      <div>
        {this.cartItems()}
      </div>
    )
  }
}

export default Cart;