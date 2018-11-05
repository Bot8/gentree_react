import React, { PureComponent } from 'react';
import './person-name.css';

export default class PersonName extends PureComponent {
  render() {
    const { first_name, middle_name, last_name } = this.props;
    
    return (
      <div className='person-name'>
        <div className='person-name_last-name'>{last_name}</div>
        <div className='person-name_first-name'>
          {first_name} {middle_name ? middle_name : ''}
        </div>
      </div>
    );
  }
}