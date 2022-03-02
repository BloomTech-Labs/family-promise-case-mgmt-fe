import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, Card } from 'antd';
import './RenderLayoutTemplate.css';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
const { Header, Content, Footer } = Layout;

const RenderLayoutTemplate = () => {
  const location = useLocation();
  return (
    <div className="RenderLayoutTemplate">
      <Layout className="layout">
        <Header>
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
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderLayoutTemplate;
