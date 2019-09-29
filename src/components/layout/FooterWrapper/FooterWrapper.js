import React, { PureComponent } from 'react';
import './footer_wrapper.css';
import shiftContent from 'components/layout/Shift/ShiftContent';
import Appbar from 'muicss/lib/react/appbar';

export default class FooterWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpened } = this.props,
            className = isSideContentOpened ? shiftContent() : null;
        
        return (
            <div id="layout_footer-wrapper" className={className}>
                <Appbar>
                    {content}
                </Appbar>
            </div>
        );
    }
}
