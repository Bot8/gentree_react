import React, { PureComponent } from 'react';
import SideDrawer from 'components/layout/SideDrawer/SideDrawer';
import ContentWrapper from 'components/layout/ContentWrapper/ContentWrapper';

export default class Layout extends PureComponent {
    render() {
        const { sideContent, mainContent } = this.props,
            isSiderawerActive = null !== sideContent;
        
        return (
            <div>
                <SideDrawer content={sideContent}/>
                <ContentWrapper content={mainContent} isSiderawerActive={isSiderawerActive}/>
            </div>
        );
    }
}
