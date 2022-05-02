import React from 'react';
import { Header } from '../../common/Header';
import CaseTable from '../../common/CaseTable';
import RecentActivity from '../../common/RecentActivity';

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
