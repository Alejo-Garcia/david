export const extractCountryValues = (
  countries: {capital: string[]; name: {common: string}; subregion: string}[],
) => {
  return countries.map(({capital, name: {common}, subregion}) => {
    return [common, capital, subregion];
  });
};
