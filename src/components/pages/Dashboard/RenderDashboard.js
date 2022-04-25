import { Header } from 'antd/lib/layout';
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
