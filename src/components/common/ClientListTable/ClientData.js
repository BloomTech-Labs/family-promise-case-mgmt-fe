import React, { useEffect, useState } from 'react';
import ClientListTable from './ClientListTable';
import axios from 'axios';

export default function ClientData() {
  // clientData will be an array of objects, with each object pertaining to a client
  const [clientData, setClientData] = useState([
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
        setClientData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ClientListTable clients={clientData} />
      </div>
    </>
  );
}
