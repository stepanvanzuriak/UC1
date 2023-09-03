import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(countries);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');

      setCountries(data);
    };

    fetchData();
  }, []);

  return (
    <form onSubmit={onSubmit} className="main-form">
      <input placeholder="Name" />
      <input placeholder="Population" />
      <input placeholder="Sort by country" />
      <input placeholder="Number of records" />
      <input type="submit" />
    </form>
  );
};

export default App;
