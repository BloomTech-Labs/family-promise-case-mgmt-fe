import React from 'react';
import { Avatar, Card } from 'antd';
import Vector from '../../assets/Vector.png';

const { Meta } = Card;

const RecentActivity = () => {
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="First Lastname"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo"
        />
      </Card>
    </>
  );
};

export default RecentActivity;
