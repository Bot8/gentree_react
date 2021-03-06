import React, { PureComponent } from 'react';
import './content_wrapper.css';
import shiftContent from 'components/layout/Shift/ShiftContent';

export default class ContentWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpened } = this.props,
            className = isSideContentOpened ? shiftContent() : null;
        
        return (
            <div id="layout_content-wrapper" className={className}>
                {content}
            </div>
        );
    }
}
