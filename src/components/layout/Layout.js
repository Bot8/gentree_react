import React, { PureComponent } from 'react';
import SideContentWrapper from 'components/layout/SideContentWrapper/SideContentWrapper';
import ContentWrapper from 'components/layout/ContentWrapper/ContentWrapper';
import FooterWrapper from 'components/layout/FooterWrapper/FooterWrapper';
import HeaderWrapper from 'components/layout/HeaderWrapper/HeaderWrapper';

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
                <HeaderWrapper
                    isSideContentOpened={isSideContentOpen}
                />
                <ContentWrapper
                    content={mainContent}
                    isSideContentOpened={isSideContentOpen}
                />
                <FooterWrapper
                    isSideContentOpened={isSideContentOpen}
                />
            </div>
        );
    }
}
