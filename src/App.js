import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import { useState } from 'react';
import ItemsDisplay from './ItemsDisplay';

function App() {
  const [filters, setFilter] = useState({});
  const [data, setData] = useState({items: []})

  const updateFilters = (searchParams) =>{
    setFilter(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"]
    item.id = items.length + 1
    items.push(item);
    setData({ items: items });
    console.log(data)
  }
  
  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={setFilter} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}



export default App;