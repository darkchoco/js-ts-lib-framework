import axios from 'axios';

export async function fetchCountries() {
  try {
    const response = await axios.get('http://localhost:8080/countries');
    // const response = await axios.get('https://naras-api.vercel.app/all');
    return response.data;
  } catch (e) {
    return [];
  }
}

export async function fetchSearchResults(q) {
  try {
    const response = await axios.get(`http://localhost:8080/search?q=${ q }`);
    return response.data;
  } catch (e) {
    return [];
  }
}

export async function fetchCountry(code) {
  try {
    const response = await axios.get(`http://localhost:8080/countries/${ code }`);
    return response.data;
  } catch (e) {
    return null;
  }
}