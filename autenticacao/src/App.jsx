import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios'
// import { stringify } from 'postcss'

//desafio 
// faça o login salvar usuario e senha na localstorage, leia e após logar redirecione para home, na NAV bar exibir o nome de user
// e o botao deslogar, e oculte o "login"
function App() {
  const[logado,setLogado] = useState(false)
  const [dados,setDados] = useState()
  const navigate = useNavigate();

  const logar= (login, senha)=>{
    axios.post('http://127.0.0.1:8000/auth/jwt/create',{
      username: login,
      password: senha
    }).then((res)=>{
      console.log(res)
      localStorage.setItem("Token",JSON.stringify({acess:res.data.access,refresh:res.data.refresh}))
      localStorage.setItem("dados", JSON.stringify({login:login,senha:senha}))
      setLogado(true)
    }).catch((erro)=>{
      console.log(erro)
    })
    
    const defaultOptions ={
      headers:{
        Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxODQ1NDE0LCJqdGkiOiI1OWY4Mzk3MzI3MmE0Y2NlYTA5ZDk2ZDUzNGFjNmQ2MiIsInVzZXJfaWQiOjF9.aQGOIE-B_9zd2LMRmpj9DqIrP3qc14Abh-8Uu89969s'
      },
    }

    axios.get('http://127.0.0.1:8000/loja/clientes', 
      {...defaultOptions}).then((res)=>{
        console.log(res)
      })
      navigate('/inicio')
}
  const getAccessToken  = () => {
      const info = JSON.parse(localStorage.getItem('Token'))
      alert(info.access)
  }


  useEffect(()=>{
    setDados(JSON.parse(localStorage.getItem("dados")))  
  },[logado])
  

  return (
    <>
    {/* Identificar a rota atual e com base nisso, exibir ou não o component Nav*/}
    {/* chamar nav bar aq */}
    <Nav dados={dados}></Nav>
        <Routes>
      {/* <Routes path='/' element={<PageCadastro/>}/> */}
      <Route path='/' element={<Login login={logar}/>}/>
      <Route path='/inicio' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
