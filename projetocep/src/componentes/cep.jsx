const CEP = ({cep, logradouro, bairro, cidade, uf, numero, setCEP, setLogradouro, setBairro, setUf, setNumero, setCidade }) => {
    return ( 
        <div className='flex items-center justify-center w-screen h-screen bg-slate-200 flex-col'>
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite o seu CEP' maxLength={8} onChange={(e) => setCEP(e.target.value)} />
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite a sua Cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} />
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite o seu Estado' value={uf} onChange={(e) => setUf(e.target.value)} />
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite o seu bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite o logradouro' value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
            <input className='w-[80%] border-2 border-blue-950 rounded-md outline-none' type='text' placeholder='Digite o número da residência' value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
    );
}
 
export default CEP;


