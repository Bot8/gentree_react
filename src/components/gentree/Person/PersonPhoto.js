import React, {PureComponent} from 'react'

export default class PersonPhoto extends PureComponent {
  render() {
    return (
      <div className='person-photo'>
        <img src={this.props.photo}/>
      </div>
    )
  }
}
