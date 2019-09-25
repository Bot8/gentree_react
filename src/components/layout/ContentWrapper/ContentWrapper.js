import React, { PureComponent } from 'react';
import './content_wrapper.css';

export default class ContentWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpened } = this.props;
        
        return (
            <div
                id="layout_content-wrapper"
                className={isSideContentOpened ? 'layout_content-wrapper_shifted' : ''}
            >
                {content}
            </div>
        );
    }
}
