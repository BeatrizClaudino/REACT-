import Header from "../componentes/Header";

const CriarConta = () => {
    return ( 
    <div className="w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]">
        <Header/>
         <form className='flex flex-col items-center justify-center gap-10 -mt-20 mx-5 '>
            <label className='dark: text-light-100'>Nome</label>
            <input className='w-full max-w-lg  h-9 rounded-md' type='text' required placeholder='Digite o seu nome' onChange={e => setCpf(e.target.value)} />
            <label className='dark: text-light-100'>E-mail</label>
            <input className='w-full max-w-lg h-9 rounded-md' type='email' required placeholder='Digite o seu e-mail' onChange={e => setSenha(e.target.value)} />
            <label className='dark: text-light-100'>CPF</label>
            <input className='w-full max-w-lg h-9 rounded-md' type='text' required placeholder='Digite o seu CPF' onChange={e => setSenha(e.target.value)} />
            <label className='dark: text-light-100'>Data de nascimento</label>
            <input className='w-full max-w-lg h-9 rounded-md' type='date' required placeholder='Digite sua data de nascimento' onChange={e => setSenha(e.target.value)} />
            <label className='dark: text-light-100'>Celular</label>
            <input className='w-full max-w-lg h-9 rounded-md' type='number' required placeholder='Digite o seu número de telefone' onChange={e => setSenha(e.target.value)} />
            <label className='dark: text-light-100'>Cep</label>
            <input className='w-full max-w-lg h-9 rounded-md' type='text' required placeholder='Digite o seu número CEP' onChange={e => setSenha(e.target.value)} />
            <button onClick={() => { 
                login(cpf, senha)
                // navigate('/')
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>

            {/* <Botao evento={() =>login(cpf, senha)} tipo='submit' texto='Login'/> */}
        </form>
    </div>
     );
}
 
export default CriarConta;