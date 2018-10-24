import React, {PureComponent} from 'react'
import Person from '../Person'
import './style.scss'


export default class Pair extends PureComponent {
  render() {
    const
      verticalMultiplier = 300,
      horizontalMultiplier = 500;

    const
      top = verticalMultiplier * this.props.position.y,
      left = horizontalMultiplier * this.props.position.x;

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
        className="pair"
        style={{
          'top': `${top}px`,
          'left': `${left}px`,
        }}
      >
        {pair}
      </div>
    )
  }
}