
import './App.css';
import { FiSearch } from 'react-icons/fi';
import {useState} from 'react';

import api from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {

    if(input === ''){
      alert('Preencha algum CEP')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }catch{
      alert('Ops...Erro ao buscar');
      setInput('');
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Buscador CEP</h1>
    <div className="container-input">

      <input type="text" 
      placeholder = "Digite seu CEP" 
      value = {input}
      onChange ={(e) => setInput(e.target.value)} 
      />

      <button className = 'buttonSearch' onClick={handleSearch}>
        <FiSearch size ={20} color = '#FFF' />
      </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className = 'main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.localidade} - {cep.uf}</span>
          <span>DDD: {cep.ddd}</span>
          <span>{cep.bairro}</span>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
        </main>
      )}


    </div>
  );
}

export default App;
