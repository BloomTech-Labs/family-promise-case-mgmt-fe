import React from 'react';
import DashHeader from '../../common/DashHeader';
import { Layout, Row, Col, Card, Statistic } from 'antd';
import styled from 'styled-components';
import {
  TeamOutlined,
  HomeOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const DashboardContent = styled.div`
  margin-top: 72px;
`;

const { Header, Content, Footer } = Layout;

//mock data for bar chart
const barData = [
  { name: 'Active Cases', value: 30 },
  { name: 'Families Assisted', value: 128 },
  { name: 'Beds Avl', value: 10 },
  { name: 'Cases Intaked', value: 9 },
];

//mock data for pie chart
const pieData = [
  { name: 'Funded 2', value: 400 },
  { name: 'Test 2', value: 300 },
  { name: 'Test 3', value: 200 },
  { name: 'Test 4', value: 100 },
];

//colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RenderDashboard = () => {
  return (
    <div className="RenderCases">
      <Layout className="Layout">
        <Header className="Header">
          <DashHeader />
        </Header>
        <Content className="Content">
          <DashboardContent>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card className="DashboardCard" bordered={false}>
                  <Statistic
                    title="Active Cases"
                    value={42}
                    prefix={<FileTextOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card className="DashboardCard" bordered={false}>
                  <Statistic
                    title="Families Assisted"
                    value={128}
                    prefix={<HomeOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card className="DashboardCard" bordered={false}>
                  <Statistic
                    title="Case Managers"
                    value={15}
                    prefix={<TeamOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card className="DashboardCard" bordered={false}>
                  <Statistic
                    title="Cases Resolved"
                    value={92}
                    prefix={<CheckCircleOutlined />}
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
              <Col span={12}>
                <Card className="DashboardCard" bordered={false}>
                  <h3 style={{ marginBottom: 16 }}>Statistics Overview</h3>
                  <BarChart
                    width={800}
                    height={300}
                    data={barData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="DashboardCard" bordered={false}>
                  <h3 style={{ marginBottom: 16 }}>Category Distribution</h3>
                  <PieChart width={500} height={300}>
                    <Pie
                      data={pieData}
                      cx={250}
                      cy={150}
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Card>
              </Col>
            </Row>
          </DashboardContent>
        </Content>
      </Layout>
    </div>
  );
};

export default RenderDashboard;
