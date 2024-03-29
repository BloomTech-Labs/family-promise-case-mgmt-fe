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
  return { authorization: `Bearer ${token}` };
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
  //the issue is with the apiRootUrl var - now what it is, idk. almost seems like it's too slow when the URL is set as a variable. This works for now, will look into the other issue later.

  // axios.get(`http://localhost:8000/profile/${id}`, {
  //   headers: getAuthHeader(isAuthenticated, token),
  // }).then(res => {
  //   console.log(res.data);
  // }).catch(err => console.log('this is the new try error:' + err));

  try {
    return axios
      .get(`http://localhost:8000/profile/${id}`, {
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

const getClientsNotes = clientId => {
  try {
    return axios
      .get(`http://localhost:8000/api/clients/${clientId}/notes`)
      .then(res => res.data)
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export { sleep, getExampleData, getProfileData, getDSData, getClientsNotes };
