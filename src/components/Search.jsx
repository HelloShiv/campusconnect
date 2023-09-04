import React from "react";
import "../styles/search.css";

function Search(props){
    return <form className="form-search" method="get" action="#" onChange= {event => event.preventDefault()}>
            <input type="search" name="search" placeholder={props.placeholder} />
            <button type="submit">Search</button>
            
        </form>


}

export default Search;