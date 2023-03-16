import React from 'react';
import { Card } from 'antd';
import { Chart, Interval, Line, Point, Tooltip, Axis } from 'bizcharts';

const data = [
  { month: 'Jan', cases: 240 },
  { month: 'Feb', cases: 270 },
  { month: 'Mar', cases: 310 },
  { month: 'Apr', cases: 350 },
  { month: 'May', cases: 370 },
  { month: 'Jun', cases: 400 },
  { month: 'Jul', cases: 380 },
  { month: 'Aug', cases: 420 },
  { month: 'Sep', cases: 390 },
  { month: 'Oct', cases: 410 },
  { month: 'Nov', cases: 450 },
  { month: 'Dec', cases: 460 },
];

const CaseProgressChart = () => {
  return (
    <Card title="Case Progress Over Time" style={{ marginBottom: '20px' }}>
      <Chart
        height={400}
        autoFit
        data={data}
        interactions={['active-region']}
        padding={[30, 30, 30, 50]}
      >
        <Axis name="month" />
        <Axis name="cases" />
        <Tooltip shared />
        <Interval position="month*cases" />
      </Chart>
    </Card>
  );
};

export default CaseProgressChart;
