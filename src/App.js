import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [peso, setPeso] = useState(0);
  const [colon, setColon] = useState(0);
  const [bitcoint, setBitcoint] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((total * tipo) * 1);
    setEuro((total * tipo) * 0.85);
    setPeso((total * tipo)*20.07);
    setColon((total * tipo)*8.75);
    setBitcoint((total * tipo)*0.000022);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Cambio de divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Peso mexicano: {peso}</p>
      <p>Colones salvadorennos: {colon}</p>
      <p>Bitcoint: {bitcoint}</p>
      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={1.17}>Euro</option>
        <option value={0.050}>Peso mexicano</option>
        <option value={0.11}>Colones salvadorennos</option>
        <option value={45463.20}>Bitcoint</option>

      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
