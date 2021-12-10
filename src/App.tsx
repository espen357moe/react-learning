import React from 'react';
import { isTemplateTail } from 'typescript';
import './App.css';

interface IPerson {
  id: number;
  name: string;
}

function App() {
  
  const initialList: Array<IPerson> = [];

  let [counter, setCounter] = React.useState(initialList.length);
  const [names, setNames] = React.useState(initialList);
  const [name, setName] = React.useState('');
  
  function handleChange(event: any){
    setName(event.target.value);    
  }

  function handleAdd(){    
    const newNames = names.concat({name: name, id: counter});
    setNames(newNames);
    setName('');
    setCounter(++counter);
  }

  function handleClick(person: IPerson){
    let newNames = names.filter((x)=>x.id!==person.id);
    setNames(newNames);    
  }
  
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <table>
        <tr>
          {names.map((item) => (
              <td>
                <button type="button" onClick={()=>handleClick(item)}>{item.name}</button>
              </td>
            ))}        
        </tr>
      </table>
    </div>
  );
}

export default App;
