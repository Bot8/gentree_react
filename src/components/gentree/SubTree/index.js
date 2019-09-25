import React, { PureComponent } from 'react';
import Pair from 'components/gentree/Pair';
import PairChildsConnector from 'components/gentree/Pair/PairChildsConnector';
import './style.css';

export default class SubTree extends PureComponent {
    render() {
        const { parents, childs, isRoot, edges, level, onClick } = this.props;
        
        return (
            <div className='subtree'>
                <div className='subtree__parents'>
                    <Pair parents={parents} isRoot={isRoot} haveChilds={!!childs} edges={edges} onClick={onClick}/>
                </div>
                {childs && this.renderChilds(level, childs, onClick)}
            </div>
        );
    }
    
    renderChilds(currentLevel, childs, onClick) {
        const
            level = currentLevel + 1,
            lastChild = childs.length - 1,
            renderChilds = childs.map((item, key) => {
                let edges = [];
                
                if (key === 0) {
                    edges.push('left');
                }
                
                if (key === lastChild) {
                    edges.push('right');
                }
                
                return <SubTree parents={item.parents} childs={item.childs} level={level} edges={edges} onClick={onClick}/>;
            });
        
        return ([
            <PairChildsConnector/>,
            <div className='subtree__childs'>
                {renderChilds}
            </div>,
        ]);
    }
}
