import { useState } from "react";

function searchBar(props){
    return (
      <div>
        <h2>Search for in item</h2>
        <form>
            <label for="name-field">Name: </label>
            <input id="name-field" type="text  "></input>
        </form>
      </div>
    );
}