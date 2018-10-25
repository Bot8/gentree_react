import React, {PureComponent} from 'react'
import PersonName from 'components/gentree/Person/PersonName'
import PersonYearsOfLife from 'components/gentree/Person/PersonYearsOfLife'
import PersonPhoto from "components/gentree/Person/PersonPhoto";
import Panel from 'muicss/lib/react/panel';
import './person.css'

export default class Person extends PureComponent {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
  }

  render() {
    const person = this.props.person,
      panelClass = this.state.isHovered ? "mui--z2" : "mui--z1";

    return (
      <Panel className={`person ${panelClass}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {/*TODO remove debug span*/}
        <span>#{person.id}</span>
        <PersonPhoto photo={person.photo}/>
        <PersonName
          first_name={person.first_name}
          last_name={person.last_name}
          middle_name={person.middle_name}
        />
        <PersonYearsOfLife birth={person.birth} death={person.death}/>
      </Panel>
    )
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }
}