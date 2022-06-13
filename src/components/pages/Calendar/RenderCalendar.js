import React from 'react';
import DashHeader from '../../common/DashHeader';
import NavHeader from '../../common/NavHeader';
import Button from '../../common/Button';
import { Layout, Card } from 'antd';

const { Sider, Content, Footer } = Layout;

function RenderCalendar() {
  return (
    <div>
      <Layout className="Layout">
        <DashHeader />
        <Layout>
          <Sider>
            <Button />
            This is Sider
          </Sider>
          <Content>This is Content</Content>
        </Layout>

        <Content className="Content">
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              <Button />
              Hello
            </Card>
          </div>
        </Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}

export default RenderCalendar;
