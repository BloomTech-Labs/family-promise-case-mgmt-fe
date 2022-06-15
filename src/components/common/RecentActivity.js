import React from 'react';
import { Avatar, Card, Button } from 'antd';
import Vector from '../../assets/Vector.png';

const { Meta } = Card;

const RecentActivity = () => {
  return (
    <div className="CardDiv">
      <Card
        style={{
          width: 300,
        }}
      >
        <div className="CardHeader">
          <p>
            First Lastname
            <br />
            XXXX_XX_XX{' '}
          </p>
          <img className="VectorArrow" src={Vector} alt="arrow" />
          <Button type="primary">View Case</Button>
        </div>

        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo"
        />
      </Card>
    </div>
  );
};

export default RecentActivity;
