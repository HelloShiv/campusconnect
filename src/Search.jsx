import React from "react";
import "../src/css/search/search.css";

function Search(){
    return <form class="form-search" method="get" action="#" onChange= {event => event.preventDefault()}>
            <input type="search" name="search" placeholder="Seach for the lost item ...." />
            <button type="submit">Search</button>
            
        </form>


}

export default Search;