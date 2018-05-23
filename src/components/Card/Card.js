import React, { Component } from 'react'
import list from '../../InterviewProject.json'
// import { Col } from 'reactstrap'

class Card extends Component {
  render () {
    return (
      <div className='card-container'>
        {list.map(data =>
          <div className='card-wrapper'>
            {data.showBridge ? <img src='http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg' alt='bridge' /> : <img src='http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png' alt='placeholder' /> }
            <h5>{data.Heading}</h5>
            <span>{data.Subheading}</span>
            <hr />
            <span>{data.Price}</span>
          </div>
        )}
      </div>
    )
  }
}

export default Card
