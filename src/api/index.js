import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifiData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    );

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country);
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryDetails = async (country) => {
  try {
    const countryDetails = await axios.get(`${url}/countries/${country}`);
    console.log(countryDetails)
    return countryDetails.data;
  } catch (err) {
    console.log(err);
  }
};
