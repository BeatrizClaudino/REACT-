import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({dados}) => {
    const navigate = useNavigate()
    const logout = () => {
       localStorage.clear()
       navigate('/')
       window.location.reload(true);
    }
    return ( 
        <>
            <div className='flex w-full bg-slate-500 p-3'>
                    <ul className='flex list-none w-full justify-around'>
                        <li><Link to={'/inicio'} className='text-white hover:text-red-800 '>Home</Link></li>
                        <li><Link to={'/produtos'} className='text-white hover:text-red-800'> Produtos</Link></li>
                        {
                            !dados?
                                <li><Link to={'/logar'} className='text-white hover:text-red-800'>Login</Link></li>
                            :<><li><Link to={'/logar'} className='text-white hover:text-red-800'>{dados.login}</Link></li>
                            <li><Link to={'/'} className='text-white hover:text-red-800' onClick={logout}>Sair</Link></li></>
                        }
                    </ul>
            </div>
            
        </> 
    );
}

export default Nav;