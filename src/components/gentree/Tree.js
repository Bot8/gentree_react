import React, { Component } from 'react';
import './tree.css';
import SubTree from 'components/gentree/SubTree';

export default class Tree extends Component {
  render() {
    const { parents, childs } = this.props.tree;
    
    return (
      <div className="tree">
        <SubTree parents={parents} childs={childs} isRoot={true} level={0}/>
      </div>
    );
  };
}
