import axios from "axios";

const getCountryFromCode = async (code) => {
  const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
  const result = data.filter((country) => country.alpha3Code === code);
  return result.map((cnt) => cnt.name);
};

export default getCountryFromCode;

// const result = getCountryFromCode("MNE");
// console.log(result);
