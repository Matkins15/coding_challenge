import React, { Component } from 'react'
class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: this.props.list
    }
    console.log(this.state.list)
  }

  render () {
    return (
      <div className='card-container'>
        {this.state.list.map(data =>
          <div className='card-wrapper'>
            <div className='image-container'>
              {data.showBridge ? <img className='bridge-card' src='http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg' alt='bridge' /> : <img className='placeholder-card' src='http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png' alt='placeholder' /> }
            </div>
            <div className='content-container'>
              <h4 className='text'>{data.Heading}</h4>
              <span className='text'>{data.Subheading}</span>
              <hr className='hr' />
              <div className='price-container'>
                <span className='price'>{'$' + data.Price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Card
