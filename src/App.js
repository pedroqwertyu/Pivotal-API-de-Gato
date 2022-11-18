import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [gato, setGato] = useState(null)

  useEffect(() => {
    getImagem()
  }, [])

  function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.response
  }

  function getImagem() {
    const data = fazGet("https://api.thecatapi.com/v1/images/search")
    const array = JSON.parse(data)
    const objeto = array[0]
    setGato(objeto)
  }

  return (
    <div>
      <div>
        <img src={gato?.url} alt="logo" />
      </div>
      <div>
        <button onClick={() => window.location.reload()}>RECARREGAR</button>
      </div>
    </div>
  );
}

export default App;
