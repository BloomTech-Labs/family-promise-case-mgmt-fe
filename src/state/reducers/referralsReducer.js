import { referral } from '../actions';
import Moment from 'moment';

const intialState = [
  {
    name: 'John Doe',
    address: '123 Anywhere St',
    apt: '5',
    city: 'Los Angeles',
    state: 'CA',
    zip: '16822',
    cell: '555-555-5555',
    home: '555-555-5555',
    work: '555-555-5555',
    email: 'test@test.com',
    first_meeting_date: Moment('04-17-1998', 'MM-DD-YYYY'),
  },
];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case referral.DELETE_REFERRAL:
      const filteredReferrals = state.filter(
        (referral, index) => index !== action.index
      );
      return filteredReferrals;

    case referral.SAVE_REFERRAL:
      const newReferrals = [...state];
      newReferrals.push(action.payload);
      return newReferrals;

    case referral.EDIT_REFERRAL:
      const updatedReferrals = [...state];
      updatedReferrals[action.index] = action.payload
      console.log(updatedReferrals)
      return updatedReferrals;

    default:
      return state;
  }
};
