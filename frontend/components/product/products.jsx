import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_name: '',
      product_description: '',
      product_price: '',
      product_category: ''
    };
    this.renderErrors = this.renderErrors.bind(this);
  };

  componentDidMount(){
    this.props.showAllProducts()
      // .then(response => response.json())
      // .then(allProducts => this.setState(allProducts))
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
    // return <div>hello</div>
    const products = Object.values(this.props.allProducts).map((product) => {
      return (<li>
        {product.product_name},
        {product.product_description},
        {product.product_price},
        {product.product_category}
      </li>)
    })
    // const {products} = this.state;
    return(
      <div>
        {products}
      </div>
    )
  }
}

export default Product;