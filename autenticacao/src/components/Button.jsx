import React from 'react';

const Botao = ({onClick,type,children}) => {
    return ( 
        <>
            <button type={type} onClick={onClick} className='p-3 rounded-xl bg-pink-400 text-white font-bold'>
                {children}
            </button>
        </>
     );
}
 
export default Botao;