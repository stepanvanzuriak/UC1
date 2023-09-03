import { useEffect, useRef, useState } from 'react';
import { API_URL } from './lib/constants';
import {
  pagination,
  filterByCountry,
  filterByPopulation,
  sortByName,
} from './lib/lib';
import axios from 'axios';
import './App.css';

const App = () => {
  const formRef = useRef();
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const {
      name,
      population,
      sort,
      pagination: N,
    } = Object.fromEntries(formData);

    setDisplay(
      pagination(
        countries
          .filter(filterByCountry(name))
          .filter(filterByPopulation(population))
          .sort(sortByName(sort)),
        N,
      ),
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API_URL);

      setCountries(data);
      setDisplay(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} className="main-form">
        <h1>Filter countries</h1>
        <input name="name" placeholder="Name" />
        <input name="population" placeholder="Population in millions" />
        <select name="sort">
          <option value="">--Sort order--</option>
          <option value="ascend">Ascend</option>
          <option value="Descend">Descend</option>
        </select>
        <input
          type="number"
          name="pagination"
          placeholder="Number of records"
        />
        <input type="submit" />
      </form>
      <pre className="display">
        Found {display.length} records
        {'\n\n'}
        {JSON.stringify(display, null, 2)}
      </pre>
    </>
  );
};

export default App;
