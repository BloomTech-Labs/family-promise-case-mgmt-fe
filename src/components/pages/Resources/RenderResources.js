import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from '../../common/CaseDetails/SearchIcon';

import { Layout, Space, Input, Content, Sider, Footer } from 'antd';

export default function RenderResources() {
  return (
    <div className="RenderResources">
      <DashHeader />
      <div className="containerStyles">
        <Layout className="Layout">
          <Sider className="Sider">
            <div className="SidebarContainer">
              <div>
                <Space direction="vertical">
                  <Input
                    prefix={<SearchIcon className="searchIcon" />}
                    placeholder="Search resources"
                    className="SearchBar"
                  />
                </Space>
              </div>
            </div>
          </Sider>
          <Content className="Content"></Content>
        </Layout>
      </div>
      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </div>
  );
}
