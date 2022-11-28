import { useState } from 'react';
import dataList from './data/assignment-data.json';

const SearchBar = () => {
  const [flightsData, setFlight] = useState(dataList);
  const [searchText1, setSearchText1] = useState('');
  const [searchText2, setSearchText2] = useState('');

  function changeSearchText(sText) {
    if (sText) {
      setSearchText1(sText);
      const flightData = dataList.filter(
        (item) => item.originCity.toLowerCase() == sText.toLowerCase() 
      );
      setFlight(flightData);
    } else {
      setFlight(dataList);
      setSearchText1('');
    }
  }

  function changeSearchText2(sText2) {
    if (sText2) {
      setSearchText2(sText2);
      const flightData = dataList.filter(
        (item) => item.destinationCity.toLowerCase() == sText2.toLowerCase() 
      );
      setFlight(flightData);
    } else {
      setFlight(dataList);
      setSearchText2('');
    }
  }

  return (
    <>
      <div className='input-div'>
        <input
          type='text'
          value={searchText1}
          placeholder="Origin city"
          onChange={(e) => changeSearchText(e.target.value)}
        />
        <input
          type='text'
          value={searchText2}
          placeholder="Departure city"
          onChange={(e) => changeSearchText2(e.target.value)}
        />
      </div>
      <div>
        {flightsData.map((item) => (
          <div className='flights'>
            <p className='flight-name'><span>Flight name: </span>{item.name}</p>
            <p className='flight-price'><span>Price: </span>{item.price}</p>
            <p className='flight-ocity'><span>Origin city: </span>{item.originCity}</p>
            <p className='flight-dcity'><span>Destination city: </span>{item.destinationCity}</p>
            <p className='flight-ddate'><span>Departure date: </span>{item.departureDate}</p>
            <p className='flight-dtime'><span>Departure time: </span>{item.departureTime}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchBar;
