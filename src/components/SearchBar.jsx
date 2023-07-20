import React, {useState} from 'react'


const SearchBar = () => {

const [search, setSearch] = useState(0)

 const countries = [

  { name: "Spain"},
  { name: "Thailand"},
  { name: "Costa Rica" },
  { name: "Iceland"},
  

];

const handleChange = (e) => {
  e.preventDefault();
  setSearch(e.target.value);
};
//filters results from specific index

if (search.length > 0) {
    countries.filter((country) => {
    return country.name.match(search);
});
}

return (
<div className='search'>


<input 
   placeholder="Search here"
/>

</div>
)
};


export default SearchBar;