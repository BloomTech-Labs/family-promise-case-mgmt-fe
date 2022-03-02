import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Card } from 'antd';
import './RenderLayoutTemplate.css';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
const { Header, Content, Footer } = Layout;

const RenderLayoutTemplate = () => {
  const location = useLocation();

  return (
    <div className="RenderLayoutTemplate">
      <Layout className="layout">
        <Header className="Header">
          <NavHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname} />
          <div className="site-layout-content">
            <Card className="Card"></Card>
          </div>
        </Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderLayoutTemplate;
