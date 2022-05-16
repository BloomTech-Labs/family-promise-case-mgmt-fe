import { referral } from '../actions';

const initialReferral = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cell: '',
  home: '',
  work: '',
  email: '',
  first_meeting_date: '',
};

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
    first_meeting_date: '04-17-1998',
  },
];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case referral.SET_REFERRALS:
      const updatedReferrals = state.map((referral, i) => {
        if (i === action.payload.index) {
          return { ...referral, ...action.payload.data };
        }
        return referral;
      });
      return updatedReferrals;

    case referral.DELETE_REFERRAL:
      const filteredReferrals = state.filter(
        (referral, index) => index !== action.index
      );
      return filteredReferrals;

    case referral.ADD_REFERRAL:
      const newReferrals = [...state];
      newReferrals.push(initialReferral);
      return newReferrals;

    default:
      return state;
  }
};
