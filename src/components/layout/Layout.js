import React, { PureComponent } from 'react';
import SideContentWrapper from 'components/layout/SideContentWrapper/SideContentWrapper';
import ContentWrapper from 'components/layout/ContentWrapper/ContentWrapper';

export default class Layout extends PureComponent {
    render() {
        const { sideContent, mainContent } = this.props,
            isSideContentOpened = null !== sideContent;
        
        return (
            <div>
                <SideContentWrapper content={sideContent}/>
                <ContentWrapper content={mainContent} isSideContentOpened={isSideContentOpened}/>
            </div>
        );
    }
}
