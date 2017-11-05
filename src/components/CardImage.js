import React, { Component } from 'react';

class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: '',
      imgSrc: ''
    }
  }

  componentDidMount() {
    console.log(this.props);
    fetch(`https://api.scryfall.com/cards/multiverse/${this.props.multiverseId}`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        alt: data.name,
        imgSrc: data.image_uris.png
      });
    })
  }

  render() {
    return(
      <img src={this.state.imgSrc} alt={this.state.alt}/>
    )
  }
}

export default CardImage;