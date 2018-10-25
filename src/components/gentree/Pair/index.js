import React, {PureComponent} from 'react'
import Person from '../Person'
import './style.scss'

export default class Pair extends PureComponent {
  render() {
    const
      self = this,
      parents = this.props.parents.map(function (person, index) {
        let className = [
          'pair__item',
          `pair__item_${index === 0 ? 'first' : 'last'}`
        ];

        if (self.props.edges) {
          self.props.edges.forEach(edge => {
            className.push(`pair__item_edge-${edge}`)
          })
        }

        return (
          <div
            className={className.join(' ')}
            key={person.id}
          >
            <Person person={person}/>
          </div>
        )
      });

    return (
      <div
        className={`pair ${this.props.haveChilds ? 'pair_with-childs' : ''}`}
      >
        {parents}
      </div>

    )
  }
}