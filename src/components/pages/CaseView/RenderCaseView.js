import React from 'react';
import { Layout } from 'antd';
import CaseDashboard from '../../common/Dashboard';
import FamilyMembersTable from '../../common/FamilyTable';
import NavHeader from '../../common/NavHeader';
import BreadCrumbs from '../../common/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import HistoryPopup from '../../common/HistoryPopup';
const { Header, Content, Footer } = Layout;

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
          <h1>
            {family.headOfHousehold.firstname}
            {family.headOfHousehold.lastname}'s family (household ID:{' '}
            {family.householdId})
          </h1>
          <CaseDashboard familyData={family} />
          <FamilyMembersTable familyData={family} />
        </Content>
        <HistoryPopup />
        <Footer className="Footer">
          Family Promise of Spokane ©2022 Created by BloomTech Labs
        </Footer>
      </Layout>
    </div>
  );
};

export default RenderCaseView;
