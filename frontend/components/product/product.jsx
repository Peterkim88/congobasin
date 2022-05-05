import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    // debugger
    this.props.showOneProduct(this.props.match.params.id);
  }
  
  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    // debugger
    const product = this.props.selectedProduct;
    // debugger
    if (!product){
      return null;
    }
    return(
      <div>
        <div key={`product-${product.id}`}>
          {product.product_name},
          {product.product_description},
          {product.product_price},
          {product.product_category}
        </div>
      </div>
    )
  }
}

export default Product;