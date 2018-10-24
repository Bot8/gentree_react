import React, {PureComponent} from 'react'
import './style.css'

export default class PairChildsConnector extends PureComponent {
  render() {
    return <div
      className='pair-childs-connector'
      style={{
        'width': `${this.props.width}px`,
        'top': `${this.props.top}px`,
        'left': `${this.props.left}px`
      }}
    />
  }
}