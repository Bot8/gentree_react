import React, {Component} from 'react'
import Pair from './Pair'
import './tree.css'

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.minX = 0;
  }

  render() {
    let
      root = this.props.tree,
      result = [];

    root['position'] = {
      'x': 0,
      'y': 0,
    };

    this.arrangeChilds(root);
    this.pushPairs(root, this.minX * -1);
    this.renderNode(root, result);

    return (
      <div className="tree">
        {result}
      </div>
    )
  };

  arrangeChilds = (root, minX) => {
    const
      self = this,
      y = root['position']['y'] + 1,
      x = root['position']['x'],
      childs = root['childs'],
      half = Math.floor(childs.length / 2);

    childs.forEach((item, key) => {
      const childX = x + key - half;

      if (self.minX  > childX) {
        self.minX = childX;
      }

      item['position'] = {
        'y': y,
        'x': x + key - half,
      };

      if (item['childs']) {
        self.arrangeChilds(item, minX)
      }
    });
  };

  pushPairs = (root, size) => {
    const self = this;

    root['position']['x'] += size;

    if(root['childs']) {
      root['childs'].forEach((item) => {
        self.pushPairs(item, size);
      });
    }
  };

  renderNode = (node, result) => {
    if (node.parents) {
      result.push(
        <Pair pair={node.parents} position={node.position}/>
      );
    }

    if (node.childs) {
      node.childs.forEach((node) => {
        this.renderNode(node, result);
      })
    }
  };
}
