import React from 'react';
import { Layout, Card } from 'antd';
import DashHeader from '../../common/DashHeader';
import { Resources } from '../../common/Resources';
const { Content, Footer, Header } = Layout;

const ResourcesContainer = () => {
  return (
    <div className="RenderLayoutTemplate">
      <Layout className="Layout">
        <Header className="Header">
          <DashHeader />
        </Header>
        <Content className="Content">
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              <Resources />
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

export default ResourcesContainer;
