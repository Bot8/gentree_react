import React, {PureComponent} from 'react'
import fixtures from '../fixtures/gentree'
import 'bootstrap/dist/css/bootstrap.css'
import Tree from './gentree/Tree'

export default class App extends PureComponent {
  render() {
    return <Tree tree={fixtures}/>
  }
}
