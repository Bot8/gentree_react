import React, {Component} from 'react'
import Pair from './Pair'
import './tree.css'
import 'muicss/lib/sass/mui.scss'

export default class Tree extends Component {
  render() {
    const root = this.props.tree;
    let result = [];

    this.renderNode(root, result);

    return (
      <div className="tree">
        {result}
      </div>
    )
  }

  renderNode = (node, result) => {
    if (!node.parents) {
      return;
    }

    result.push(
      <Pair pair={node.parents}/>
    );
  }
}
