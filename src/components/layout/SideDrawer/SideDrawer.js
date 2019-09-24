import React, { PureComponent } from 'react';
import './side_drawer.css';

export default class SideDrawer extends PureComponent {
    render() {
        const { content } = this.props,
            isSiderawerActive = content !== null;
        
        return (
            <div id="sidedrawer" className={isSiderawerActive ? 'active' : ''}>{content}</div>
        );
    }
}
