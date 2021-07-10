import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ListarCategorias from "./components/ListarCategorias";
import NovaCategoria from "./components/NovaCategoria";
import EditaCategoria from "./components/EditaCategoria";

function App() {
  return (
    <BrowserRouter>
      <nav className="container navbar navbar-expand navbar-dark bg-secondary">
        <h1 className="navbar-brand">
          PDSII 
        </h1>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/categorias" className="nav-link">
              Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/novaCategoria" className="nav-link">
              Nova Categoria
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/categorias"]} component={ListarCategorias} />
          <Route exact path="/novaCategoria" component={NovaCategoria} />
          <Route exact path="/editaCategoria/:id" component={EditaCategoria} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
