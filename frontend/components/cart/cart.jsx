import React from 'react';
import { showOneProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import NavFooter from '../footer/footer';

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

  updateQuantity(userId, item){
    let newItem = item
    const handleQuantity = event => {
      const newQuantity = event.target.value
      return newItem.quantity = newQuantity;
    }
    return(
      // <div>Qty:
      //   <input 
      //     className='update-quantity-input'
      //     ref={`update-cart-${item.id}`}
      //     type="number"
      //     onChange={handleQuantity} 
      //     defaultValue={item.quantity} />
      //   {' '}
      //   <button className='cart-update-quantity-button' 
      //     onClick={() => this.props.updateItem(userId, newItem)}>
      //     Update Quantity
      //   </button>
      // </div>
      <div className='quantity-to-add' onChange={() => this.props.updateItem(userId, newItem)}>
        <label className='quantity-to-add-label'>Qty:</label>
        <select className='quantity-to-add-dropdown' onChange={handleQuantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
        </select>
      {/* <button className='cart-update-quantity-button' 
        onClick={() => this.props.updateItem(userId, newItem)}>
        Update Qty
      </button> */}
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
                  <div className='cart-product-details-instock-message'>
                    In Stock
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
        <div className='cart-product-info'>
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
          ${subTotal.toFixed(2)}
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
      <div className='cart-full-page'>
        <div className='cart-top-margin'></div>
        <div className='cart-body'>
          <div className='cart-left-margin'></div>
          
          <div className='cart-page'>
            <div className='cart-heading'>
              <div className='cart-heading-message'>Shopping Cart</div>
            </div>
            <div className='cart-all-items'>
              {this.cartItems()}
            </div>
          </div>
          
          <div className='cart-checkout-container'>
            {this.checkOut()}
          </div>
          
          <div className='cart-right-margin'></div>
        </div>
        <div className='cart-bot-margin'></div>
      
      </div>     
    )
  }
}

export default Cart;