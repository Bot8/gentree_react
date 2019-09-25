import React, { PureComponent } from 'react';
import 'components/layout/SideContentWrapper/side_content_wrapper.css';

export default class SideContentWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpen } = this.props;
        
        return (
            <div
                id="layout_side-content-wrapper"
                className={isSideContentOpen ? 'layout_side-content-wrapper_opened' : ''}
            >
                {content}
            </div>
        );
    }
}
