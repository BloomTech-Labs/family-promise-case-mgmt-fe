import axios from 'axios';

// we will define a bunch of API calls here.
const apiRootUrl = process.env.REACT_APP_API_URI;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = (isAuthenticated, token) => {
  if (!isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${token}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const getProfileData = (id, isAuthenticated, token) => {
  try {
    return axios
      .get(apiRootUrl + `/profile/${id}`, {
        headers: getAuthHeader(isAuthenticated, token),
      })
      .then(response => response.data);
  } catch (error) {
    console.error(error);
    return new Promise(() => {
      return [];
    });
  }
};

export { sleep, getExampleData, getProfileData, getDSData };
