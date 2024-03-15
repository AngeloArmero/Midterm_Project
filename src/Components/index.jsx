import React, {useState} from 'react';
import '../App.css';

function TodoList(){
    
    
    const [newItem, setNewItem]= useState(" ");
    const[items,setItems] = useState([]);
    // Helper Functions
    function handleChange(event) {
        const newValue = event.target.value;
       setNewItem(newValue);
      }
      
      function delItems(index) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
      }
     
      function addNewItems(e) {
        e.preventDefault()
        setItems((prevValue) => [...prevValue, newItem]);
        setNewItem("");
      
      }
      
return (
  
    <div className="container">
        <div className="header">
            <h2>My To-Do List</h2>
      <div className='row'>
        <input onChange={handleChange} type="text" placeholder="Add an item..." value={newItem} id='input-Box' />
        <button className='add' onClick={addNewItems}>Add</button>
        </div>
        <div className='list-container'>
            {items.map((todoItem, index) => (
            <div className="listContainer" key={index}>
              <div className="info">{todoItem}</div>
              <button className="delete-btn" onClick={() => delItems(index)}>
               Delete 
              </button>
            </div>
          ))}
        </div>
        </div>
    </div>
   
);
}
export default TodoList;