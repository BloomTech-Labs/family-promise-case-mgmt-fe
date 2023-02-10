import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from '../../common/CaseDetails/SearchIcon';

import { Layout, Space, Input, Button } from 'antd';
const { Sider, Content, Footer } = Layout;

export default function RenderResources() {
  function searchResourcesBtn(evt) {
    console.log('search button works');
  }

  function handleChange(evt) {
    console.log(evt.target);
  }

  return (
    <div className="RenderResources">
      <DashHeader />
      <div className="containerStyles">
        <Layout className="Layout">
          <Sider className="Sider">
            <div className="SidebarContainer">
              <div className="sectionContainer">
                <Space direction="vertical">
                  <Input
                    prefix={<SearchIcon className="searchIcon" />}
                    placeholder="Search resources"
                    className="SearchBar"
                    onChange={handleChange}
                  />
                  <Button
                    type="Default"
                    className="SidebarButton"
                    onClick={searchResourcesBtn}
                  >
                    SEARCH
                  </Button>
                </Space>
              </div>
            </div>
          </Sider>
          <Content className="Content">
            <h1>Resources</h1>
          </Content>
        </Layout>
      </div>
      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </div>
  );
}
