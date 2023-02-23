import React from 'react';
import { Layout, Card } from 'antd';
import DashHeader from '../../common/DashHeader';
const { Content, Footer, Header } = Layout;

const Resources = () => {
  return (
    <div className="RenderLayoutTemplate">
      <Layout className="Layout">
        <Header className="Header">
          <DashHeader />
        </Header>
        <Content className="Content">
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              {/* <div style={{height: '100%'}}></div> */}
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

export default Resources;
