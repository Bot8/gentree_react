import React, { PureComponent } from 'react';
import 'components/layout/SideContentWrapper/side_content_wrapper.css';

export default class SideContentWrapper extends PureComponent {
    render() {
        const { content } = this.props,
            isSideContentOpened = content !== null;
        
        return (
            <div
                id="layout_side-content-wrapper"
                className={isSideContentOpened ? 'layout_side-content-wrapper_opened' : ''}
            >
                {content}
            </div>
        );
    }
}
