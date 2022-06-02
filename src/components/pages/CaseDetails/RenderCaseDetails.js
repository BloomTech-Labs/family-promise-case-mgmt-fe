import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Card } from 'antd';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { CaseDetails } from '../../common/CaseDetails';
const { Header, Content, Footer } = Layout;

const RenderCaseDetails = () => {
  const location = useLocation();

  return (
    <div className="RenderLayoutTemplate">
      <Layout className="Layout">
        <Header className="Header">
          <NavHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname} />
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              <CaseDetails />
            </Card>
          </div>
        </Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderCaseDetails;
