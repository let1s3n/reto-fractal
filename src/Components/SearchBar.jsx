import React,{useState} from 'react'
import { Form} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";



const SearchBar = ({handleSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleSearch(searchText);
  }

  const handleSearchChange = e => {
    setSearchText(e.target.value);

  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="input-group border border-medium rounded-pill">
        <input type="text" className="form-control rounded-pill border-0 py-1" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2" onChange={handleSearchChange}/>
        <button className="btn py-0" type="submit" id="button-addon2"><FaSearch className="text-soft-gray" /></button>
      </div>
    </Form>
  )
}

export default SearchBar
