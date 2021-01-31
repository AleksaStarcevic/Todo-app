import React,{useState} from 'react'; // uvoz reacta-a i useState funkcije
import './App.css'; // uvoz css-a 
import Form from './components/Form'; // uvoz Form komponente
import TodoList from './components/TodoList';  // uvoz TodoList komponente


function App() { // 'root' komponenta  

  const [inputText,setInputText] = useState(''); // koriscenje funkcije useState koja vraca pocetno stanje InputText koje je prazno na pocetku i funkciju za azuriranje tog stanja
  const [todos,setTodos] = useState([]); // koriscenje funkcije useState za kreiranje stanja todos koje ima vrednost praznog niza, i funkcije setTodos za azuriranje tog stanja
  return ( // komponenta vraca JSX kod koji omogucava pisanje HTML koda u React-u
    <div className="App"> {/* U JSX-u klase dodajemo uz pomoc rezervisane reci className */}
    <header>
    <h1>To Do List</h1> {/*naslov u okviru zaglavlja */}
    </header>
    <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/> {/*Unutar Form komponente nalaze se 'props' objekti koji omogucuju slanje podataka od jedne do druge komponente*/}
    <TodoList setTodos={setTodos} todos={todos}/>
         
    </div>
  );
}

export default App; // izvoz App komponente 
