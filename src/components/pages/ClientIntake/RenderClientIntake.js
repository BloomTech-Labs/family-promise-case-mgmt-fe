import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Layout } from 'antd';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { ClientIntakeForm } from '../../common/ClientIntakeForm';

const { Header, Footer, Content } = Layout;

const RenderClientIntake = () => {
  const location = useLocation();

  return (
    <div className="RenderLayoutTemplate">
      <Layout className="Layout">
        <Header className="Header">
          <NavHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname} />
          <div className="Content__Container">
            <Card className="Content__Container-Card">
              <ClientIntakeForm />
            </Card>
          </div>
        </Content>
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderClientIntake;
