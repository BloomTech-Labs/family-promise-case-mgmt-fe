import React from 'react';
import { ClientListTable } from '../../common/ClientListTable';
import { Layout } from 'antd';
import DashHeader from '../../common/DashHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import HistoryPopup from '../../common/HistoryPopup';
const { Header, Content, Footer } = Layout;

export default function RenderCases() {
  const location = useLocation();

  return (
    <div className="RenderCases">
      <Layout className="Layout">
        <Header className="Header">
          <DashHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname} />
          <ClientListTable />
        </Content>

        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}
