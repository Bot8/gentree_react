import React, {Component} from 'react'
import Pair from './Pair'
import './tree.css'
import PairChildsConnector from "./PairChildsConnector";

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.minX = 0;
    this.verticalMultiplier = 300;
    this.horizontalMultiplier = 500;
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

      if (self.minX > childX) {
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

    if (root['childs']) {
      root['childs'].forEach((item) => {
        self.pushPairs(item, size);
      });
    }
  };

  renderNode = (node, result) => {
    result.push(
      <Pair
        top={this.verticalMultiplier * node.position.y}
        left={this.horizontalMultiplier * node.position.x}
        pair={node.parents}
        position={node.position}
        haveChilds={!!node.childs}
      />
    );

    if (node.childs) {
      let
        left = null,
        right = null;

      node.childs.forEach((node) => {
        if (left === null || node.position.x < left) {
          left = node.position.x
        }

        if (right === null || node.position.x > right) {
          right = node.position.x
        }

        this.renderNode(node, result);
      });

      let connectorLength = (right - left) * this.horizontalMultiplier;

      if (connectorLength === 0) {
        connectorLength = 140;
      }

      result.push(
        <PairChildsConnector
          width={connectorLength}
          top={(node.position.y + 1) * this.verticalMultiplier - 30}
          left={left * this.horizontalMultiplier + 100}
        />
      )
    }
  };
}
