import React, {PureComponent} from 'react'
import './person-photo.css'

export default class PersonPhoto extends PureComponent {
  render() {
    return (
      <div className='person-photo'>
        <img src={this.props.photo}/>
      </div>
    )
  }
}
