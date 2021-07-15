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
      <nav className="container navbar navbar-expand navbar-dark bg-secondary">
        <h1 className="navbar-brand">
          
        </h1>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/categorias" className="nav-link">
              Categorias
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/produtos" className="nav-link">
              Produtos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usuarios" className="nav-link">
              Usuários
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={sair} className="nav-link">
              Sair
            </Link>
          </li>
        </div>     
      </nav>

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

export default App;
