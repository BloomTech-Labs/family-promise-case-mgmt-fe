import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import {
  HomeOutlined,
  UsergroupAddOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';

const HomelessnessStats = () => {
  return (
    <Card title="Homelessness Statistics" style={{ marginBottom: '20px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="Total Cases"
            value={1128}
            prefix={<FileProtectOutlined />}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="People Helped"
            value={756}
            prefix={<UsergroupAddOutlined />}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Open Cases" value={372} prefix={<HomeOutlined />} />
        </Col>
      </Row>
    </Card>
  );
};

export default HomelessnessStats;
