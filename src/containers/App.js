import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tree from 'components/gentree/Tree';
import Detail from 'components/details/Details';
import Layout from 'components/layout/Layout';
import 'muicss/lib/sass/mui.scss';
import { loadTree } from 'actions/TreeActions';
import { openDetail, closeDetail } from 'actions/PersonDetailActions';

class App extends PureComponent {
    renderDetail = (personDetail) => {
        return <Detail
            person={personDetail.person}
            loading={personDetail.loading}
            error={personDetail.error}
        />;
    };
    
    renderTree = (tree) => {
        return  <Tree
            tree={tree.tree}
            error={tree.error}
            loading={tree.loading}
            loadTree={this.props.loadTree}
            openDetail={this.props.openDetail}
            closeDetail={this.props.closeDetail}
        />;
    };
    
    render() {
        const { tree, personDetail } = this.props,
            detailsContent = this.renderDetail(personDetail),
            treeContent = this.renderTree(tree);
        
        return (
            <div className='app'>
                <Layout
                    sideContent={detailsContent}
                    isSideContentOpen={personDetail.isOpen}
                    closeSideContent={this.props.closeDetail}
                    mainContent={treeContent}
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
