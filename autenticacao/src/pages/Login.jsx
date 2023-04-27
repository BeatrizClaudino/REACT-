import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Botao from '../components/Button';
import Nav from '../components/Nav';

const Login = ({login}) => {
    const [user,setUser] = useState("")
    const [senha,setSenha] = useState("")
    return ( 
        <>
            <div className='flex justify-center items-center h-screen'>
                    <div className="w-3/2 bg-gray-300 p-3 rounded-md flex flex-col">
                        <input className="p-2 bg-pink-500 m-3 rounded-md text-white" type="text" placeholder='Login' onChange={(e)=>setUser(e.target.value)}/>
                        <input className="p-2 bg-pink-500 m-3 rounded-md text-white" type="password" placeholder='Senha' onChange={(e)=>setSenha(e.target.value)}/>
                      <Botao onClick={()=>login(user,senha)}>
                            Acessar
                      </Botao>
                    </div>
            </div>
        </> 
    );
}
 
export default Login;   