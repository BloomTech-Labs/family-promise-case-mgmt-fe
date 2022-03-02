import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, Card } from 'antd';
import './RenderLayoutTemplate.css';
import BreadCrumbs from '../../common/BreadCrumbs';
const { Header, Content, Footer } = Layout;

const RenderLayoutTemplate = () => {
  const location = useLocation();
  return (
    <div className="RenderLayoutTemplate">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
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
