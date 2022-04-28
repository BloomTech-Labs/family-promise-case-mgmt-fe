import { Header } from '../../common/Header';
import CaseTable from '../../common/CaseTable';
import RecentActivity from '../../common/RecentActivity';
import React from 'react';

function RenderDashboard() {
  return (
    <div>
      <Header />
      <CaseTable />
      <RecentActivity />
    </div>
  );
}

export default RenderDashboard;
