import React from 'react';
import { DashHeader } from '../../common/DashHeader';
import CaseTable from '../../common/CaseTable';
import RecentActivity from '../../common/RecentActivity';

function RenderDashboard() {
  return (
    <div>
      <DashHeader />
      <CaseTable />
      <RecentActivity />
    </div>
  );
}

export default RenderDashboard;
