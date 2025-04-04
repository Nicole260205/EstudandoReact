import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");


  return (
    <div>
      <h2>Search for in item</h2>
      <form>
        <label for="name-field">Name: </label>
        <input id="name-field" type="text" value={name} />
        <label for="price-field">Max price: </label>
        <input id="price-field" type="number" value={price} />
        <label for="type-field">Type: </label>
        <input id="type-field" type="text" value={type} />
        <label for="brand-field">Brand: </label>
        <input id="brand-field" type="text" value={brand} />
        <button type="button">Search</button>
      </form>
    </div>
  );
}
export default SearchBar