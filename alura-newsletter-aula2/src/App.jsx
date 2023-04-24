import { useState } from "react"
import ArtileList from "./components/ArticleList/ArticleList"
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"

const App = () => {
  const [user, setUser] = useState('')
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      {/* É COMO SE FOSSE O IF TERNARIO */}
      {/* SE TIVER USUÁRIO ELE CARREGA O ARTIGO/ARTICLE */}
      <Header/>
      {hasUser && <ArtileList/>}

      {/* SE TIVER USUÁRIO ELE CARREGA O FORMS */}
      { !hasUser && <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App
