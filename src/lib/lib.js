export const filterByCountry = (country) => ({name: {common}}) => {
  const regex = new RegExp(country, 'i')

  return regex.test(common);
}

export const filterByPopulation = (number) => ({population}) => {
  return population < number * 10 ** 6
};