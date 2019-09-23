import React, { PureComponent } from 'react';
import Person from 'components/gentree/Person';
import './style.scss';

export default class Pair extends PureComponent {
    render() {
        const
            { parents, isRoot, edges, haveChilds, onClick } = this.props,
            renderParents = parents.map(function (person, index) {
                let className = [
                    'pair__item',
                    `pair__item_${index === 0 ? 'first' : 'last'}`,
                ];
                
                if (!isRoot) {
                    className.push(`pair__item_nested`);
                }
                
                if (edges) {
                    edges.forEach(edge => {
                        className.push(`pair__item_edge-${edge}`);
                    });
                }
                
                return (
                    <div
                        className={className.join(' ')}
                        key={person.id}
                    >
                        <Person person={person} onClick={onClick}/>
                    </div>
                );
            });
        
        return (
            <div
                className={`pair ${haveChilds ? 'pair_with-childs' : ''}`}
            >
                {renderParents}
            </div>
        
        );
    }
}
