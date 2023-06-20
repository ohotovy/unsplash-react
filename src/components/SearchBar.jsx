import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SearchBar(){
    const [inputValue, setInputValue] = useState()

    const handleInput = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    return (
        <div className="SearchBar">
            <input name='searchQuery' type='text' onChange={handleInput}/>
            <Link to={`/search/${inputValue}`}><button type='submit'>Search</button></Link>
        </div>
    );
}
