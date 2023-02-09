import React from 'react';
import DashHeader from '../../common/DashHeader';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function RenderResources() {
  return (
    <div className="RenderResources">
      <DashHeader />
      <div>
        <Layout className="Layout">
          <Footer className="Footer">
            Family Promise of Spokane ©2022 Created by BloomTech Labs
          </Footer>
        </Layout>
      </div>
    </div>
  );
}
