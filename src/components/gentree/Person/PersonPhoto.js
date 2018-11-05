import React, { PureComponent } from 'react';
import './person-photo.css';

export default class PersonPhoto extends PureComponent {
  render() {
    const { photo } = this.props;
    return (
      <div className='person-photo'>
        <img src={photo}/>
      </div>
    );
  }
}
