import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from "./components/Home"
import ListarCategorias from "./components/ListarCategorias";
import NovaCategoria from "./components/NovaCategoria";
import EditaCategoria from "./components/EditaCategoria";
import Usuarios from "./components/Usuarios";
import NovoUsuario from "./components/NovoUsuario";
import EditaUsuario from "./components/EditaUsuario";
import ListProduct from "./components/ListProduct";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

function App() {
  
  return (
    <BrowserRouter>
      <div>
          <ul className="menu">
            <li className="column">
              <Link to="/categorias" className="link">
                Categorias
              </Link>
            </li>
            <li className="column">
              <Link to="/produtos" className="link">
                Produtos
              </Link>
            </li>
            <li className="column">
              <Link to="/usuarios" className="link">
                Usuários
              </Link>
            </li>
            <li className="column">
              <Link onClick={sair} className="link">
                Sair
              </Link>
            </li>
          </ul>
      </div>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/categorias"]} component={ListarCategorias} />
          <Route exact path="/novaCategoria" component={NovaCategoria} />
          <Route exact path="/editaCategoria/:id" component={EditaCategoria} />
          <Route exact path={["/usuarios"]} component={Usuarios} />
          <Route exact path="/novoUsuario" component={NovoUsuario} />
          <Route exact path="/editaUsuario/:id" component={EditaUsuario} />
          <Route exact path="/produtos" component={ListProduct} />
          <Route exact path="/newProduct" component={NewProduct} />
          <Route exact path="/editProduct/:id" component={EditProduct} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function sair(ev) {
  localStorage.clear();
  alert("Até logo!")
  window.location.href = '/login';

} 

function validar(ev) {
  window.location.reload();

} 

export default App;
