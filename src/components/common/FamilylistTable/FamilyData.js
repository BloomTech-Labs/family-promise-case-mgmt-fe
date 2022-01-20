import React, { useEffect, useState } from 'react';
import FamilyListTable from './FamilyListTable';
import axios from 'axios';

export default function FamilyData() {
  const [familyData, setFamilyData] = useState([
    {
      id: 'FP0001',
      first_name: 'Michael',
      last_name: 'Lawson',
      case_manager: 'James Browns',
      status: 'In Progress',
    },
  ]);

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/12303c12-5fe2-42b4-843c-dd141d203cba`)
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
