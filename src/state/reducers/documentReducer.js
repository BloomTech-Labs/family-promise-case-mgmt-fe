import { documents } from '../actions';

const initialReferral = {
  name: 'John Doe',
  address: '123 Anywhere St',
  city: 'Los Angeles',
  state: 'CA',
  zip: '16822',
  cell: '555-555-5555',
  home: '555-555-5555',
  work: '555-555-5555',
  email: '555-555-5555',
  first_meeting_date: '04-17-1998',
};

const intialState = {
  client_id: true,
  completed_hfca: false,
  valid_driver: true,
  valid_social: false,
  dshs_wic_tanf_snap: true,
  responsible_renters_course: false,
  birth_cert_for_children: true,
  child_enrolled_school: false,
  childcare: true,
  food_assistance: false,
  clothing_assistance: true,
  counseling_services: false,
  addiction_resources: true,
  mentor_programs: false,
  youth_services: true,
  budgeting: false,
  can_text_employment_opportunities: true,
  can_text_apartment_listings: false,
  can_text_career_fairs: true,
  referrals: [
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
  ],
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case documents.SET_DOCUMENTS:
      return { ...state, ...action.payload };

    case documents.SET_REFERRALS:
      const updatedReferrals = state.referrals.map((referral, i) => {
        if (i === action.payload.index) {
          return { ...referral, ...action.payload.data };
        }
        return referral;
      });
      return { ...state, referrals: updatedReferrals };

    case documents.DELETE_REFERRAL:
      const filteredReferrals = state.referrals.filter(
        (referral, index) => index !== action.index
      );
      return { ...state, referrals: filteredReferrals };

    case documents.ADD_REFERRAL:
      const newReferrals = [...state.referrals];
      newReferrals.push(initialReferral);
      return { ...state, referrals: newReferrals };

    default:
      return state;
  }
};
