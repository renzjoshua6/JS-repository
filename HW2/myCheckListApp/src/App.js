import { useState} from "react";

const CheckListApp = () => {
  const [list, setList] = useState([]);
  const [items, setItem] = useState('');

  const addItem = () => {
    if (!list.find((list => list.name === items))){
      setList([...list, { id: list.length, name: items }]);
    } else {
      alert(`${items} is already added`);
    }
    setItem('')
  };
  function clearCheckList() {
    setList([]);
  }

  function removeItem(id) {
    const editedList = list.filter(
      (list) => list.id !== id);
    setList(editedList);
  }

  return (
    <div className="App">
      <Header />
          <input
            value={items}
            placeholder = 'Input items'
            onChange={(event) => setItem(event.target.value)}
          />
         <button onClick={addItem}>Add Item</button>
         <button onClick={clearCheckList}>Clear Checklist</button>
          <ul>
            {list.map((list) => (
              <li key={list.id} onClick = {() => removeItem(list.id)}> {list.name}
              </li>
            ))}
          </ul>
    </div>
  );
};

const Header = () => {
  return <h1><center>My Checklist</center></h1>;
};

export default CheckListApp;
