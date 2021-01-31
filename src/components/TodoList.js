import React from 'react'; // uvoz react-a
import Todo from './Todo'; // uvoz Todo komponente

const TodoList = ({todos,setTodos}) => { // kreiranje TodoList komponente sa prosledjenim podacima iz App komponente
  
   return (
      <div className="todo-container">     {/*kontejner sa listom todo elemenata */}
         <ul className="todo-list">   {/* neuredjena lista elemenata */}
         {todos.map(todo =>  // prolazimo kroz niz objekata todos i za svaki objekat prikazujemo Todo komponentu
            <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text}/>  // unutar komponente nalaze se 'props' objekti koji omogucuju da posaljemo podatke do Todo komponente
         )}
         </ul>
      </div>

   );
};

export default TodoList; // izvoz TodoList komponente radi koriscenja u App komponenti