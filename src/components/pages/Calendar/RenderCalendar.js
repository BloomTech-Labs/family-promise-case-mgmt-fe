import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from './SearchIcon';

import { Layout, DatePicker, Form, Button, Input, Space } from 'antd';

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
          <Sider className="Sider">
            <div className="sidebarContainer">
              <div className="Rightside__SearchBar">
                <div>
                  <Space direction="vertical">
                    <Input
                      prefix={<SearchIcon className="searchIcon" />}
                      placeholder="Search Event"
                      className="SearchEventBar"
                    />
                  </Space>
                </div>
              </div>

              <Form.Item label="Select Date" name="Date" initialValue="">
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>

              <Button
                type="Default"
                className="SidebarButton"
                onClick={createEvent}
              >
                CREATE EVENT
              </Button>
              <Button
                type="Default"
                className="SidebarButton"
                onClick={searchEvent}
              >
                SEARCH EVENT
              </Button>
              <Button
                type="Default"
                className="CalendarsButton"
                onClick={calendars}
              >
                CALENDARS
              </Button>
            </div>
          </Sider>
          <Content className="WeeklyCalendar">
            <h3> Weekly Calendar is going to be here </h3>
          </Content>
        </Layout>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}

export default RenderCalendar;
