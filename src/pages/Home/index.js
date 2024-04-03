import { Header } from "../../components/Header";


import './styles.css'

function App() {
  return (
    <div className="App">

      <Header />
      <div className="conteudo">

        <div className="info">

          <div>
            <input name="usuario" placeholder="@username"/>
            <button>buscar</button>
          </div>

            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/148920537?v=4" className="profile" alt=""/>
              <div>
                <h3>Maycon Jeferson</h3>
                <span>@maycon</span>
                <p>descricao</p>
              </div>
          </div>

          <hr />
          
        </div>

      </div>

    </div>
  );
}

export default App;