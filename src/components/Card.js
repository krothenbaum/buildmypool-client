import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import {
//   addCard
// } from '../reducers/card';

import CardImage from './CardImage';


class Card extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
       <h1>{this.props.name}</h1>
       <p>{this.props.manaCost}</p>
       <p>{this.props.type}</p>
       <p>{this.props.text}</p>
       {this.props.types.includes("Creature") &&
        <p>{this.props.power}/{this.props.toughness}</p>  }
       <CardImage multiverseId={this.props.multiverseid} />
      </div>
    )
  }
}

export default Card;

// const mapStateToProps = state => ({
//   xln: state.card.xln
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   addCard
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Card)