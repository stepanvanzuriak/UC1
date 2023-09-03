export const filterByCountry =
  (country) =>
  ({ name: { common } = {} } = {}) => {
    if (!country) {
      return true;
    }

    const regex = new RegExp(country, 'i');

    return regex.test(common);
  };

export const filterByPopulation =
  (number) =>
  ({ population } = {}) => {
    if (!number) {
      return true;
    }

    return population < number * 10 ** 6;
  };

export const sortByName =
  (order) =>
  ({ name: { common: a } = {} } = {}, { name: { common: b } = {} } = {}) => {
    if (order !== 'ascend' && order !== 'descend') {
      return 0;
    }

    return order === 'ascend' ? a.localeCompare(b) : b.localeCompare(a);
  };

export const pagination = (data, N) => {
  if (!N) {
    return data;
  }

  return data.slice(0, N);
};
