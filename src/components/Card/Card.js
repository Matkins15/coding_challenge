import React, { Component } from 'react'
import list from '../../InterviewProject.json'
import { Button } from 'reactstrap'

class Card extends Component {
  render () {
    return (
      <div>
        {list.map(data =>
          <ol>{data.Heading}</ol>
        )}
        <Button color='primary'>primary</Button>

      </div>
    )
  }
}

export default Card
