import React from 'react'; // uvoz react-a iz node_modules foldera


const Form = ({inputText,setInputText,setTodos,todos}) => { //kreiranje Form komponente sa  prosledjenim podacima iz App komponente

   const inputTextHandler = (e) => { // funkcija koja azurira objekat stanja inputText na osnovu teksta koji je korisnik uneo
      setInputText(e.target.value); // promena stanja inputText-a na vrednost koju je korsnik uneo
   };

   const submitHandler = (e) => { // funkcija za dodavanje novih beleski
      e.preventDefault();  // funkcija za sprecavanje ponovnog pokretanja stranice klikom na dugme submit
      setTodos([...todos, // kreiranje niza objekata sa atributima text,completed,id i azuriranje stanja todos
         {text: inputText, completed: false, id: Math.random()*1000} // ... je spread operator gde u niz ukljucujemo prethodne objekte koji se tu nalaze i dodajemo novi objekat koji je kreiran 
        
      ]);
      setInputText(''); // postavljamo stanje inputText na prazan string kako se prethodno otkucan tekst ne bi nasao ponovo u input polju
      
   };
   

   return(
      <form> {/* forma koja sadrzi input polje i dva dugmeta*/}
         <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/> {/* input polje za upisivanje novih beleski*/}
         <button className="todo-button" type="submit" onClick={submitHandler}> {/* dugme za dodavanje novih beleski*/}
         <i className="fas fa-plus-square"></i>  {/*ikonica iz fontawesome bibloteke*/}
         </button>
     </form>
   );
}

export default Form; // izvoz komponente radi koriscenja u App komponenti