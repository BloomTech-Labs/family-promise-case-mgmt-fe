import { contactPreferences } from '../actions';

const intialState = {
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
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case contactPreferences.SET_CONTACT_PREFERENCES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
