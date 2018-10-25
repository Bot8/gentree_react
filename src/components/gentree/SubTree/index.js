import React, {PureComponent} from 'react'
import Pair from '../Pair'
import PairChildsConnector from '../Pair/PairChildsConnector'
import './style.css'

export default class SubTree extends PureComponent {
  render() {
    return (
      <div className='subtree'>
        <div className='subtree__parents'>
          <Pair parents={this.props.parents} isRoot={this.props.isRoot} haveChilds={!!this.props.childs} edges={this.props.edges}/>
        </div>
        {this.props.childs && this.renderChilds()}
      </div>
    );
  }

  renderChilds() {
    const
      level = this.props.level + 1,
      lastChild = this.props.childs.length - 1,
      childs = this.props.childs.map((item, key) => {
        let edges = [];

        if (key === 0) {
          edges.push('left');
        }

        if (key === lastChild) {
          edges.push('right');
        }

        return <SubTree parents={item.parents} childs={item.childs} level={level} edges={edges}/>
      });

    return ([
      <PairChildsConnector/>,
      <div className='subtree__childs'>
        {childs}
      </div>
    ]);
  }
}