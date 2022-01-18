import React, { useEffect, useState } from 'react';
import FamilyListTable from './FamilyListTable';
import axios from 'axios';

export default function FamilyData() {
  const [familyData, setFamilyData] = useState([
    {
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
      email: 'Sincere@april.biz',
      id: 1,
      name: 'Leanne Graham',
      phone: '1-770-736-8031 x56442',
      username: 'Bret',
      website: 'hildegard.org',
    },
  ]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('family data', res);
        setFamilyData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log('family', familyData);

  return (
    <>
      <div>
        <FamilyListTable family={familyData} />
      </div>
    </>
  );
}
