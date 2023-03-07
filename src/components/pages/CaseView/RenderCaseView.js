import React from 'react';
import { Layout, Typography } from 'antd';
import CaseDashboard from '../../common/Dashboard';
import FamilyMembersTable from '../../common/FamilyTable';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const RenderCaseView = ({ family }) => {
  const location = useLocation();

  return (
    <div className="RenderCaseView">
      <Layout className="Layout">
        <Header className="Header">
          <NavHeader />
        </Header>
        <Content className="Content">
          <BreadCrumbs pathname={location.pathname} />
          <div className="TitleContainer">
            <Title level={2} className="Title">
              {family.headOfHousehold.firstname}{' '}
              {family.headOfHousehold.lastname}'s Family
            </Title>
            <Title level={4} className="SubTitle">
              Household ID: {family.householdId}
            </Title>
          </div>
          <CaseDashboard familyData={family} />
          <FamilyMembersTable familyData={family} />
        </Content>

        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderCaseView;
