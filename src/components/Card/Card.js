import React, { Component } from 'react'
import list from '../../InterviewProject.json'
import { Button } from 'reactstrap'

class Card extends Component {
  render () {
    return (
      <div>
        {list.map(data =>
          <div>
            {data.showBridge ? <img src='http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg' /> : <img src='http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png' /> }
            <h5>{data.Heading}</h5>
            <span>{data.Subheading}</span>
            <span>{data.Price}</span>
          </div>
        )}
        <Button color='primary'>primary</Button>
      </div>
    )
  }
}

export default Card
