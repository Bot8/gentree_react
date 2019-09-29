import React, { PureComponent } from 'react';
import 'components/layout/HeaderWrapper/header_wrapper.css';
import Appbar from 'muicss/lib/react/appbar';
import shiftContent from 'components/layout/Shift/ShiftContent';

export default class HeaderWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpened } = this.props,
            className = isSideContentOpened ? shiftContent() : null;
        
        return (
            <div id="layout_header-wrapper" className={className}>
                <Appbar>
                {content}
                </Appbar>
            </div>
        );
    }
}
