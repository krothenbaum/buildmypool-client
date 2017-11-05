import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  createBoosters
} from '../reducers/booster';

import Card from './Card';

class Booster extends Component {
  constructor() {
    super();
    let state = {
      booster: []
    }

    this.state = state;
  }
  componentDidMount() {
    console.log(this.props)
    let booster = [];
    for(let i = 0; i < 13; i++) {
      let rand = Math.floor(Math.random() * 299);
      let card = this.props.xln.cards[rand];
      console.log(rand, card);
      booster.push(<Card {...card} key={i}/>)
    }
    this.setState({booster: [...booster]});
  }

  render() {
    return(
      <div>
        {this.state.booster.map(card => {
          return card;
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  xln: state.booster  .xln
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createBoosters
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booster)