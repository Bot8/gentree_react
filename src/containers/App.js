import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tree from 'components/gentree/Tree';
import Detail from 'components/details/Details';
import 'muicss/lib/sass/mui.scss';
import { loadTree } from 'actions/TreeActions';
import { openDetail, closeDetail } from 'actions/PersonDetailActions';

class App extends PureComponent {
    render() {
        const { tree, personDetail } = this.props;
        return (
            <div className='app'>
                <Tree
                    tree={tree.tree}
                    error={tree.error}
                    loading={tree.loading}
                    loadTree={this.props.loadTree}
                    openDetail={this.props.openDetail}
                    closeDetail={this.props.closeDetail}
                />
                <Detail
                    isOpen={personDetail.isOpen}
                    person={personDetail.person}
                    loading={personDetail.loading}
                    error={personDetail.error}
                />
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
