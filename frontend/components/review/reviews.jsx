import React from 'react';

class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  // componentDidMount(){
  //   this.props.showAllReviews()
  // }

  render(){
    // const reviews = Object.values(this.props.allReviews).map((review) => {
    //   return (
    //     <div>
    //       All Reviews
    //     </div>
    //   )
    // })
    return (
      <div>
        All Reviews
      </div>
    )
  }
}

export default Reviews;