import React, { PureComponent } from 'react';
import 'components/layout/SideContentWrapper/side_content_wrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class SideContentWrapper extends PureComponent {
    render() {
        const { content, isSideContentOpen, closeSideContent } = this.props;
        
        return (
            <div
                id="layout_side-content-wrapper"
                className={isSideContentOpen ? 'mui--z1 layout_side-content-wrapper_opened' : ''}
            >
                <FontAwesomeIcon icon={faTimes} size="lg"  pull="right" onClick={closeSideContent}/>
                {content}
            </div>
        );
    }
}
