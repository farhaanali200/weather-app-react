import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {geoApiOptions} from "../api";
import {GEO_API_URL} from "../api";

const Search = (props) => {

   const [search,setSearch] =  useState(null);

   const loadOptions = (inputValue) => {
       return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
           .then(response => response.json())
           .then(response => {
               return {
                   options:response.data.map((city) => {
                       return {
                           value: `${city.latitude} ${city.longitude}`,
                           label: `${city.name}, ${city.countryCode}`,

                       }
                   })
               }
           })
           .catch(err => console.error(err));
   }

   const handleOnChange = (searchData) => {
       console.log("Testing");
       console.log(searchData);
       setSearch(searchData);
       props.onSearchChange(searchData);

   }

    return (
        //whenever I select something from the loadoptions dropdown menu, the onchange takes the loadoptions
        // object, runs its handler and passes it to parent where console log is there to diaply it
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;