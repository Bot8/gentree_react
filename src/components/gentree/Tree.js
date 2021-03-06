import React, { Component } from 'react';
import './tree.css';
import SubTree from 'components/gentree/SubTree';
import PropTypes from 'prop-types';

export default class Tree extends Component {
    componentWillMount() {
        this.props.loadTree();
    }
    
    renderTree = (tree, onClick) => {
        const { parents, childs } = tree;
        return <SubTree
            parents={parents}
            childs={childs}
            isRoot={true}
            level={0}
            onClick={onClick}
        />;
    };
    
    renderContent = () => {
        const { tree, error, loading, openDetail } = this.props;
        
        if (error) {
            return <p>{error}</p>;
        }
        
        if (loading) {
            return <p>Loading</p>;
        }
        
        if (tree) {
            return this.renderTree(tree, openDetail);
        }
        
        return <p/>;
    };
    
    render() {
        const content = this.renderContent();
        
        return (
            <div className="tree">
                {content}
            </div>
        );
    };
}

Tree.propTypes = {
    tree: PropTypes.object,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    loadTree: PropTypes.func.isRequired,
};
