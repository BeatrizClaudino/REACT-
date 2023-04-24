const Form = ({onSubmit}) => {

    const safeSubmit = event =>{
        //PARAM QUALQUER EXECUÇÃO PADRÃO DO EVENT
        event.preventDefault()
        event.stopPropagation()

        //pegando os valores dos inputs
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }

    return (
            <form className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5 " onSubmit={safeSubmit}>
                <input className="alura-input" type="text" required placeholder="Insira seu nome"/>
                <input className="alura-input" type="email" required placeholder="Insira seu email.."/>
                <button className="alura-button" type="submit">Seguir</button>
        </form>

      );
}
 
export default Form;