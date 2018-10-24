import React, {PureComponent} from 'react'
import fixtures from '../fixtures/gentree'
import Tree from './gentree/Tree'
import 'muicss/lib/sass/mui.scss'

export default class App extends PureComponent {
  render() {
    return <Tree tree={fixtures}/>
  }
}
