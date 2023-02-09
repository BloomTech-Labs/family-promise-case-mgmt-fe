import React from 'react';
import DashHeader from '../../common/DashHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { useLocation } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function RenderResources() {
  const location = useLocation();

  return (
    <div className="RenderResources">
      <DashHeader />
      <Header className="Header">
        <h1>Resources</h1>
      </Header>
      <div>
        <Layout className="Layout">
          <Content className="Content">
            <BreadCrumbs pathname={location.pathname} />
          </Content>
          <Footer className="Footer">
            Family Promise of Spokane ©2022 Created by BloomTech Labs
          </Footer>
        </Layout>
      </div>
    </div>
  );
}
