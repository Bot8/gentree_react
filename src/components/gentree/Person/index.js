import React, {PureComponent} from 'react'
import PersonName from './PersonName'
import PersonYearsOfLife from './PersonYearsOfLife'
import PersonPhoto from "./PersonPhoto";

export default class Person extends PureComponent {
  render() {
    const person = this.props.person;

    return (
      <div className="tree-card">
        <PersonName
          first_name={person.first_name}
          last_name={person.last_name}
          middle_name={person.middle_name}
        />
        <PersonYearsOfLife birth={person.birth} death={person.death}/>
        <PersonPhoto photo={person.photo}/>
      </div>
    )
  }
}