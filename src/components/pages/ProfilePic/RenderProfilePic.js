import React from 'react';
import { DashHeader } from '../../common/DashHeader';
import { Layout } from 'antd';

const { Header } = Layout;

function RenderProfilePic() {
  return (
    <div>
      <Layout>
        <Header>
          <DashHeader />
        </Header>
      </Layout>
    </div>
  );
}

export default RenderProfilePic;
