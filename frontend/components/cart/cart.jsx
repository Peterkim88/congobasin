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

  updateQuantity(){
    
  }

  cartItems(){
    const userId = this.props.userId
    console.log(userId)
    const items = Object.values(this.props.cartItems).map((item) => {
      return Object.values(this.props.products).map((product) => {
        if (product.id === item.product_id && this.props.userId !== null){
          return (
            <div className='cart-item-box' key={`cart-item-${item.id}`}>
              {product.product_name}
              <br />
              {product.product_price * item.quantity}
              {/* {console.log(product)}
              {console.log(item)} */}
              <br />
              {item.quantity}
              <br />
              {this.deleteCartItemButton(userId, item)}
              {console.log(item)}
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