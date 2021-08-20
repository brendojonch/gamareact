import axios from 'axios';
import React, { useState } from "react";



function App(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    axios.get('https://api.github.com/users/brendojonch/repos').then(Response => console.log(Response));

  }
  return (
    <>

      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
