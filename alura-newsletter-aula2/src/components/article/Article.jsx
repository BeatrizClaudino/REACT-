const Article = ({title, text, tags, image, alt}) => {
    return ( 
        <div className="p-5 bg-gray-100 dark:bg-gray-800 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center sm:hover:shadow-gray-300 sm:hover:dark:shadow-black sm:hover:shadow-lg">
            <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="w-full  flex-row justify-end gap-2 pr-5 hidden sm:flex">
                {
                    tags.map(tag => <span className="alura-tag key={tag}">{tag}</span>)
                }
            </div>
            
            
            <div className="grid gap-1">
                {
                    text.map((content, index) => <p className="text-alura-200 dark:text-gray-200 line-clamp-6 sm-line-clamp-none" key={index}>{content}</p>)
                }

            </div>
            {/* se a imagem existir ele vai criar uma img e o src vai ser {image} */}
            {image && <img className="sm:p-4" src={image} />}

            {/* Verifica se tem uma imagem e tem um texto alternativo, a função dentro do class name fazer com que o texto só apareça se
             o SO do usuário estiver configurado para pessoas cegas */}
            {image && alt && <span className="sr-only"></span>}
        </div>
     );
}
 
export default Article;
