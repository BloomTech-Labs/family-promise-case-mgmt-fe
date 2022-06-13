import React from 'react';
import DashHeader from '../../common/DashHeader';

import { Layout, Card, Button } from 'antd';

const { Sider, Content, Footer } = Layout;

function RenderCalendar() {
  const createEvent = event => {
    console.log('The button is working');
  };

  const searchEvent = event => {
    console.log('The button is working');
  };

  const calendars = event => {
    console.log('The button is working');
  };

  return (
    <div>
      <Layout className="Layout">
        <DashHeader />
        <Layout>
          <Sider>
            <div className="sidebarButtonsContainer">
              <Button
                type="Default"
                className="sidebarButton"
                onClick={createEvent}
              >
                CREATE EVENT
              </Button>
              <Button
                type="Default"
                className="sidebarButton"
                onClick={searchEvent}
              >
                SEARCH EVENT
              </Button>
              <Button
                type="Default"
                className="sidebarButton"
                onClick={calendars}
              >
                CALENDARS
              </Button>
            </div>
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
