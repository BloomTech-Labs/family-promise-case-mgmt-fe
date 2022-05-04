import React from 'react';
import { DashHeader } from '../../common/DashHeader';
import CaseTable from '../../common/CaseTable';
import RecentActivity from '../../common/RecentActivity';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function RenderDashboard() {
  return (
    <div>
      <Layout>
        <Header>
          <DashHeader />
        </Header>
        <Content>
          <CaseTable />
          <RecentActivity />
        </Content>
        <Footer>
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}

export default RenderDashboard;
