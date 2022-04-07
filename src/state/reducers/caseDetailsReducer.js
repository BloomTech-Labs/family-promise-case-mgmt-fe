import { caseDetails } from '../actions';

const intialState = {
  id: 1,
  name: '',
  testMessage: '',
  clientFamilyInfo: {
    firstName: '',
    lastName: '',
    headOfHousehold: '',
    familyMembers: '',
    ssn: null,
    ethnicity: '',
    race: '',
    gender: '',
    selfDescribe: '',
    sexualOrientation: '',
    other: '',
    veteran: '',
    pregnant: '',
    familyMember: '',
    homelessHistory: '',
    employment: '',
  },
  householdInfo: {
    fleeingDomV: false,
    lackOfIncome: false,
    lostJob: false,
    familyConflict: false,
    familyRej: false,
    lackOfAffHous: false,
    eviction: false,
    other: false,
    otherText: '',
    numTimesHomeless: 0,
    totTimeHomeless: 0,
    lengthOfStayPrevY: 0,
    lengthOfStayPrevM: 0,
    disability: true,
    disabiltyText: '',
    activeCase: false,
    pastIncident: false,
    pastExplanation: '',
    moreThanOnePast: false,
    moreThanOneExplanation: '',
    receiveSec8Vouch: true,
    howLongA: 0,
    howLongB: 0,
    howLongC: 0,
    howLongD: 0,
    howLongE: 0,
    howLongTotal: 0,
    prevLivSit: '',
    interpreter: false,
    transportationAcc: false,
    physIll: false,
    mentalIll: false,
    famConflictHist: false,
    personalViol: false,
    subAbuse: false,
    socialWorkerName: '',
    socialWorkerEmail: '',
    socialWorkerPhone: '',
  },
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case caseDetails.GET_CASE_DETAILS:
      return {
        ...state,
      };
    // test case
    case caseDetails.LOG_SUCCESS:
      return {
        ...state,
        testMessage: action.payload,
      };
    default:
      return state;
  }
};
