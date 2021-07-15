import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"
import { Link } from "react-router-dom";

const ListarCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        buscaCategorias();
    }, []);

    const buscaCategorias = () => {
        api.getAllProduct()
            .then(response => {
                setCategorias(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setCategoriaAtiva = (categoria, index) => {
        setCategoriaSelecionada(categoria);
        setCurrentIndex(index);
    };

    return (
        <div className="container list row">
            <div className="col-md-6">
                <h4>Produtos</h4>
                <Link to="/newProduct" className="btn btn-warning">
                    Criar novo Produto
                </Link>
                <ul className="list-group py-1">
                    {categorias.content &&
                        categorias.content.map((categoria, index) => (
                            <li  className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                 onClick={() => setCategoriaAtiva(categoria, index)}
                                 key={index}
                            >{categoria.name}</li>
                        ))}
                </ul>
            </div>


            <div className="col-md-6">
                {categoriaSelecionada ? (
                    <div>
                        <h4>Detalhe</h4>
                        <div>
                            <label>
                                <strong>Produto:</strong>
                            </label>{" "}
                            {categoriaSelecionada.name}
                        </div>

                        <Link to={"/editProduct/" + categoriaSelecionada.id} className="btn btn-warning">Editar</Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escolha um produto ao lado.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListarCategorias;