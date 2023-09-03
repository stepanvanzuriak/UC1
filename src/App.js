import { useEffect, useState } from 'react';
import { API_URL } from './lib/constants';
import { filterByCountry } from './lib/lib';
import axios from 'axios';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(countries.filter(filterByCountry('sT', 'i')));
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API_URL);

      setCountries(data);
    };

    fetchData();
  }, []);

  return (
    <form onSubmit={onSubmit} className="main-form">
      <h1>Filter countries</h1>
      <input placeholder="Name" />
      <input placeholder="Population" />
      <input placeholder="Sort by country" />
      <input placeholder="Number of records" />
      <input type="submit" />
    </form>
  );
};

export default App;
