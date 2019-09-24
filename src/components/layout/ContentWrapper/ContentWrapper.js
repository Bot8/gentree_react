import React, { PureComponent } from 'react';
import './content_wrapper.css';

export default class ContentWrapper extends PureComponent {
    render() {
        const { content, isSiderawerActive } = this.props;
        
        return (
            <div id="content-wrapper" className={isSiderawerActive ? 'shifted' : ''}>{content}</div>
        );
    }
}
