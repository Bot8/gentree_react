import React, {PureComponent} from 'react'
import './person-name.css'

export default class PersonName extends PureComponent {
  render() {
    return (
      <div className='person-name'>
        <div className='person-name_last-name'>{this.props.last_name}</div>
        <div className='person-name_first-name'>
          {this.props.first_name} {this.props.middle_name ? this.props.middle_name : ''}
        </div>
      </div>
    );
  }
}