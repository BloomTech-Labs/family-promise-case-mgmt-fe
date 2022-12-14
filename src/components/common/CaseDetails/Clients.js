import React from 'react';
import { getUsersClients } from './state/actions/userActions';
import { useEffect } from 'react';

export const Clients = () => {

  useEffect(() => {
    console.log(getUsersClients);
  });

  return (console.log(useEffect()));
};

