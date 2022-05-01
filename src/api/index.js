import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios(url);
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
    const { data } = await axios(
      'https://api.covidtracking.com/v1/us/daily.json'
    );
    const dailyData = data.map(
      ({ positive, recovered, death, dateChecked: date }) => ({
        confirmed: positive,
        recovered,
        deaths: death,
        date,
      })
    );
    return dailyData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountry = async () => {
  try {
    const data = await axios(`${url}/countries`);
    const countries = data.data.countries;
    return countries;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryDetails = async (country) => {
  try {
    const countryDetails = await axios(`${url}/countries/${country}`);
    return countryDetails.data;
  } catch (err) {
    console.log(err);
  }
};
