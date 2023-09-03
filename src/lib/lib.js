export const filterByCountry = (country) => ({name: {common}}) => {
  const regex = new RegExp(country, 'i')

  return regex.test(common);
}