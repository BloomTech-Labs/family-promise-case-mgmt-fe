import React from 'react';
import { DashHeader } from '../../common/DashHeader';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function RenderRecentCases() {
  return (
    <div className="RecentCases">
      <Layout>
        <Header>
          <DashHeader />
        </Header>
        <Content></Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}

export default RenderRecentCases;
