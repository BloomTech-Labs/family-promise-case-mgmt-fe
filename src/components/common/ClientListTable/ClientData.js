import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClients } from '../../../state/features/clients/clientsSlice';
import ClientListTable from './ClientListTable';

const url = `https://mocki.io/v1/12303c12-5fe2-42b4-843c-dd141d203cba`;

// without a number to check, it causes an infinite loop and we are unsure why...needs guidance please
let number = 0;

export default function ClientData() {
  // clientData will be an array of objects, with each object pertaining to a client

  const dispatch = useDispatch();
  const data = useSelector(state => state.clients);

  useEffect(() => {
    if (number === 0) {
      axios
        .get(url)
        .then(res => {
          console.log('client data', res);
          dispatch(setClients(res.data));
        })
        .catch(err => console.log(err));
    }
    console.log(number);
    number++;
  }, []);

  return (
    <>
      <div>
        <ClientListTable clients={data.clients} />
      </div>
    </>
  );
}
