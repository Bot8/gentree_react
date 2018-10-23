import React, {PureComponent} from 'react'

export default class PersonYearsOfLife extends PureComponent {
  render() {
    return (
      <div className="person-years">
        {this.props.birth}-{this.props.death ? this.props.death : '...'}
      </div>
    );
  }
}