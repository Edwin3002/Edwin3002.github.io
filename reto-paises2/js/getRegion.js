
const getRegion = async (region) => {
    const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const dataR = await resp.json();
    // console.log(dataR)
    return dataR
};
export default getRegion;