import React, {Component} from 'react';
import './tree.css';
import SubTree from './SubTree';


export default class Tree extends Component {
  render() {
    const root = this.props.tree;

    return (
      <div className="tree">
        <SubTree parents={root.parents} childs={root.childs} isRoot={true} level={0}/>
      </div>
    )
  };
}
