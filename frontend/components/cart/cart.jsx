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

  updateQuantity(){
    
  }

  cartItems(){
    const items = Object.values(this.props.cartItems).map((item) => {
      return Object.values(this.props.products).map((product) => {
        if (product.id === item.product_id){
          return (
            <div className='cart-item-box' key={`cart-item-${item.id}`}>
              {product.product_name}
              <br />
              {item.quantity}
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
      <div>Cart Component
        {this.cartItems()}
      </div>
    )
  }
}

export default Cart;