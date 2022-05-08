import { document } from '../actions';

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
  can_add_referrals: false,
  referrals_name: 'John Doe',
  referrals_address: '123 Anywhere St, Los Angeles, CA 16822',
  referrals_cell: '555-555-5555',
  referrals_home: '555-555-5555',
  referrals_work: '555-555-5555',
  referrals_email: '555-555-5555',
  first_meeting_date: true,
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case document.SET_DOCUMENTS:
      return {
        ...state,
        client_id: action.payload.client_id,
        completed_hfca: action.payload.completed_hfca,
        valid_driver: action.payload.valid_driver,
        valid_social: action.payload.valid_social,
        dshs_wic_tanf_snap: action.payload.dshs_wic_tanf_snap,
        responsible_renters_course: action.payload.responsible_renters_course,
        birth_cert_for_children: action.payload.birth_cert_for_children,
        child_enrolled_school: action.payload.child_enrolled_school,
        childcare: action.payload.childcare,
        food_assistance: action.payload.food_assistance,
        clothing_assistance: action.payload.clothing_assistance,
        counseling_services: action.payload.counseling_services,
        addiction_resources: action.payload.addiction_resources,
        mentor_programs: action.payload.mentor_programs,
        youth_services: action.payload.youth_services,
        budgeting: action.payload.budgeting,
        can_text_employment_opportunities:
          action.payload.can_text_employment_opportunities,
        can_text_apartment_listings: action.payload.can_text_apartment_listings,
        can_text_career_fairs: action.payload.can_text_career_fairs,
        can_add_referrals: action.payload.can_add_referrals,
        referrals_name: action.payload.referrals_name,
        referrals_address: action.payload.referrals_address,
        referrals_cell: action.payload.referrals_cell,
        referrals_home: action.payload.referrals_home,
        referrals_work: action.payload.referrals_work,
        referrals_email: action.payload.referrals_email,
        first_meeting_date: action.payload.first_meeting_date,
      };
    default:
      return state;
  }
};
