import React from 'react';
import { ClientListTable } from '../../common/ClientListTable';
import { Layout } from 'antd';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { useLocation } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function RenderCases() {
  const location = useLocation();

  return (
    <div className="RenderCases">
      <Layout className="Layout">
        <Header className="Header">
          <NavHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname}></BreadCrumbs>
          <ClientListTable />
        </Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
}
