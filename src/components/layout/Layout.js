import React, { PureComponent } from 'react';
import SideContentWrapper from 'components/layout/SideContentWrapper/SideContentWrapper';
import ContentWrapper from 'components/layout/ContentWrapper/ContentWrapper';

export default class Layout extends PureComponent {
    render() {
        const { mainContent, sideContent, isSideContentOpen, closeSideContent } = this.props;
        
        return (
            <div>
                <SideContentWrapper
                    content={sideContent}
                    isSideContentOpen={isSideContentOpen}
                    closeSideContent={closeSideContent}
                />
                <ContentWrapper
                    content={mainContent}
                    isSideContentOpened={isSideContentOpen}
                />
            </div>
        );
    }
}
