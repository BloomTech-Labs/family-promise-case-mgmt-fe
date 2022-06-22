import React from 'react';
import { Avatar, Card, Button } from 'antd';
import Vector from '../../assets/Vector.png';

const { Meta } = Card;
console.log({ Meta });

const recentCases = [
  {
    firstName: 'Frank',
    lastName: 'Benavides',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Laura',
    lastName: 'Robago',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Sally',
    lastName: 'Smith',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Jen',
    lastName: 'Sanders',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Salvador',
    lastName: 'Pena',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Susy Que',
    lastName: '',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Thanasis',
    lastName: 'Lindholm',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Bryan',
    lastName: 'Torwalt',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Felipe',
    lastName: 'Venczel',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
  {
    firstName: 'Iona',
    lastName: 'Ermacora',
    date: ' XXXX_XX_XX',
    avatar: 'https://joeschmoe.io/api/v1/random',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pulvinar sollicitudin consectetur massa faucibus commodo',
  },
];

const RecentActivity = () => {
  return (
    <div className="CardDiv">
      {recentCases.map(recentCase => (
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="CardHeader">
            <p>
              {recentCase.firstName} {recentCase.lastName}
              <br />
            </p>
            <img className="VectorArrow" src={Vector} alt="arrow" />
            <Button type="primary">View Case</Button>
          </div>

          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            description={recentCase.note}
          />
        </Card>
      ))}
    </div>
  );
};

export default RecentActivity;
