import axios from 'axios'
import { useEffect, useState } from 'react'
import CEP from './componentes/cep'

function App() {
  const [cep, setCEP] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (cep.length == 8) {
      consumirAPI();
    } else {
      setUf('')
      setCidade('')
      setBairro('')
      setCEP('')
      setLogradouro('')
      setNumero('')
    }
  }, [cep])

  //função que puxa os dados da api via cep
  const consumirAPI = () => {
    axios.get(`https://apicep.com/api-de-consulta/ws/${cep}/json/`)
      .then((res) => {
        // setEndereco(res.data.logradouro + ' ' + res.data.bairro)
        setBairro(res.data.bairro)
        setCidade(res.data.localidade)
        setLogradouro(res.data.logradouro)
        setUf(res.data.uf)
        console.log(res)
      })
  }
  return (
    <CEP cep={cep} logradouro={logradouro} bairro={bairro} cidade={cidade} uf={uf} numero={numero}
    setCEP={setCEP}
    setBairro={setBairro}
    setCidade={setCidade}
    setLogradouro={setLogradouro}
    setUf={setUf}
    />
  )
}

export default App
