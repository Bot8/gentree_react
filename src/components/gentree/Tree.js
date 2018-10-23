import React, {Component} from 'react'
import Person from './Person'

export default class Tree extends Component {
  render() {
    const persons = this.props.list.map(
      person => {
        return (
          <Person person={person}/>
        )
      }
    );

    return (
      <div className="tree">
        {persons}
      </div>
    )
  }
}
