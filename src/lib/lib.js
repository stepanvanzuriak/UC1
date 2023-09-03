export const filterByCountry =
  (country) =>
  ({ name: { common } }) => {
    const regex = new RegExp(country, 'i');

    return regex.test(common);
  };

export const filterByPopulation =
  (number) =>
  ({ population }) =>
    population < number * 10 ** 6;

export const sortByName =
  (order) =>
  ({ name: { common: a } }, { name: { common: b } }) => {
    return order === 'ascend' ? a.localeCompare(b) : b.localeCompare(a);
  };

export const pagination = (data, N) => data.slice(0, N);
