import React, {Component} from 'react'
import Person from './Person'
import './tree.css'
import 'muicss/lib/sass/mui.scss'

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
