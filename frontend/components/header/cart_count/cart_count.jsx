import React from "react";

class CartCount extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.cartCount = this.cartCount.bind(this);
  }

  componentDidMount(){
    const userId = this.props.userId
    this.props.showAllItems(userId)
  }

  cartCount(){
    let totalCount = 0
    Object.values(this.props.cartItems).map((item) => {
      const newCount = totalCount + item.quantity;
      totalCount = newCount;
    })
    return totalCount;
  }

  render(){
    return(
      <div className="cart-count">
        {this.cartCount()}
      </div>
    )
  }
}

export default CartCount;