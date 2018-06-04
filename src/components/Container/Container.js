import React, { Component} from 'react'
import list from '../../InterviewProject.json'
import Card from '../../components/Card/Card'

class Container extends Component {
  render () {
    return (
      <Card list={list} />
    )
  }
}

export default Container
