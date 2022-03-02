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
        <Header style={{ background: 'white', height: '8%' }}>
          <NavHeader />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <BreadCrumbs pathname={location.pathname} />
          <div className="site-layout-content">
            <Card className="Card">
              <p>Test card</p>
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderLayoutTemplate;
