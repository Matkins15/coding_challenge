import React, { Component} from 'react'
import list from '../../InterviewProject.json'

class Container extends Component {
  render () {
    console.log(list)
    return (
      <h1 list={list}>hello</h1>
    )
  }
}

export default Container
