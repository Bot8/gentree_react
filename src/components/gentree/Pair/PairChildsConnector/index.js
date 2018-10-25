import React, {PureComponent} from 'react'
import './style.css'

export default class PairChildsConnector extends PureComponent {
  render() {
    return <div
      className='pair-childs-connector'
      style={{
        'marginLeft': this.props.leftOffcet,
        'marginRight': this.props.rightOffcet,
      }}
    />
  }
}