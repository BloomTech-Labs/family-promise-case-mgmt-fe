import React from 'react';
import { Layout, Card } from 'antd';
import DashHeader from '../../common/DashHeader';
import { CaseDetails } from '../../common/CaseDetails';
import HistoryPopup from '../../common/HistoryPopup';
const { Content, Footer, Header } = Layout;

const RenderCaseDetails = () => {
  return (
    <div className="RenderLayoutTemplate">
      <Layout className="Layout">
        <Header className="Header">
          <DashHeader />
        </Header>
        <Content className="Content">
          {/* <BreadCrumbs pathname={location.pathname} /> */}
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              <CaseDetails />
            </Card>
          </div>
        </Content>
        <HistoryPopup />
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderCaseDetails;
