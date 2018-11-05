import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tree from 'components/gentree/Tree';
import 'muicss/lib/sass/mui.scss';
import { loadTree } from 'actions/TreeActions';
import { openDetail, closeDetail } from 'actions/PersonDetailActions';

class App extends PureComponent {
  render() {
    const { tree, personDetail } = this.props;
    return (
      <div className='app'>
        <Tree tree={tree.tree} error={tree.error} loading={tree.loading} loadTree={this.props.loadTree}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    tree: store.tree,
    personDetail: store.personDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTree: () => dispatch(loadTree()),
    openDetail: (id) => dispatch(openDetail(id)),
    closeDetail: () => dispatch(closeDetail()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
