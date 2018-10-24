import React, {PureComponent} from 'react'
import Person from '../Person'
import './style.scss'


export default class Pair extends PureComponent {
  render() {
    const pair = this.props.pair.map(function (person, index) {
      const pairItemClass = index === 0 ? 'first' : 'last';

      return (
        <div
          className={`pair__item pair__item_${pairItemClass}`}
          key={person.id}
        >
          <Person person={person}/>
        </div>
      )
    });

    return (
      <div
        className={`pair ${this.props.haveChilds ? 'pair_with-childs' : ''}`}
        style={{
          'top': `${this.props.top}px`,
          'left': `${this.props.left}px`,
        }}
      >
        {pair}
      </div>
    )
  }
}