import React from 'react';
import { DashHeader } from '../../common/DashHeader';
import NavHeader from '../../common/NavHeader';
import { Layout } from 'antd';

const { Header, Footer } = Layout;

function RenderCalendar() {
  return (
    <div>
      <Layout>
        <Header>
          <NavHeader />
        </Header>
      </Layout>
      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </div>
  );
}

export default RenderCalendar;
