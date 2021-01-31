import React from 'react'; // uvoz react-a

const Todo = ({text,todo,todos,setTodos}) => { // kreiranje Todo komponente sa  prosledjenim podacima iz TodoList komponente

   const handleDelete = () => { // funkcija za brisanje belezaka 
    const newTodos = todos.filter(el => el.id !== todo.id); // kreiranje novog niza gde izbacujemo elemente ciji je identifikator stanja jednak identifikatoru elementa kojeg je korisnik oznacio
    setTodos(newTodos); // azuriranje stanja todos na novi niz koji se sastoji od belezaka koje nisu obrisane
   };

   const completeHandler = () => { // funkcija za oznacavanje beleski koje su kompletirane
      const todosCompleted = todos.map(el => { // prolazak kroz niz objekata todos gde se nalaze beleske
         if(el.id === todo.id){  // provera identifikatora elementa u nizu sa identifikatorom elementa kojeg je korisnik oznacio
            return {
               ...el,completed: !el.completed  // ako su identifikatori identicni u niz se vraca objekat za izmenjenim atributom 'completed' koji postaje true
            }
         }
         return el;   // ako identifikatori nisu identicni element se vraca u niz neizmenjen
      });
      setTodos(todosCompleted); // azuriranje 'state-a' todos
   };
   
   

   return (
   <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li> {/* element liste koji sadrzi tekst koji je korisnik uneo */}
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button> {/* klikom na dugme korsinik oznacava belesku koju je zavrsio  */}
      <button onClick={handleDelete} className="trash-btn"><i className="fas fa-trash"></i></button> {/* dugme za brisanje beleske */}  
   </div>
   );
};

export default Todo; //izvoz komponente