import './App.css'
import { ListItem } from './ListItem';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("");
  const [lista, setLista] = useState([]);

  function mudaTexto(event){
    setText(event.target.value);
  }

  function mudaLista(){
  setLista([...lista,text]);
  setText("");
}
  
  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <ul>
        {lista.map((item) => (<ListItem label={item} />))}
      </ul>
      <p>você digitou: {text}</p>
      <input type="text" onChange={(e) => mudaTexto(e)} value={text} />
      <button onClick={mudaLista  }>Adicionar</button>
      <a href={"https://api.whatsapp.com/send?text=Lista%20de%20compras:%20" + lista.join(",%20")}><button>Compartilhar no whatsapp</button></a>
    </div>
  )
}

export default App
