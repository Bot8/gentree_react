import React, { PureComponent } from 'react';
import './person-years-of-life.css';

export default class PersonYearsOfLife extends PureComponent {
  render() {
    const { birth, death } = this.props;
    return (
      <div className="person-years">
        {birth ? birth : '...'}-{death ? death : '...'}
      </div>
    );
  }
}