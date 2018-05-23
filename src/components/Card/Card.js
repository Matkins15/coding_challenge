import React, { Component } from 'react'
import list from '../../InterviewProject.json'

class Card extends Component {
  render () {
    return (
      <div>
        {list.map(data =>
          <ol>{data.Heading}</ol>
        )}
      </div>
    )
  }
}

export default Card
