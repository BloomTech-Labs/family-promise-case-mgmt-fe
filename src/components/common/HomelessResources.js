import React from 'react';
import { Card, List } from 'antd';

const data = [
  { title: 'Shelter A', description: '123 Main St, Springfield, IL' },
  { title: 'Shelter B', description: '456 Oak St, Springfield, IL' },
  { title: 'Food Bank A', description: '789 Pine St, Springfield, IL' },
  { title: 'Counseling Services', description: '321 Elm St, Springfield, IL' },
  {
    title: 'Employment Assistance',
    description: '654 Maple St, Springfield, IL',
  },
];

const HomelessResources = () => {
  return (
    <Card title="Homeless Resources" style={{ marginBottom: '20px' }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default HomelessResources;
