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
        api.getAll()
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
                <h4>Categorias</h4>
                <ul className="list-group py-1">
                    {categorias &&
                        categorias.map((categoria, index) => (
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
                                <strong>Categoria:</strong>
                            </label>{" "}
                            {categoriaSelecionada.name}
                        </div>

                        <Link to={"/editaCategoria/" + categoriaSelecionada.id} className="btn btn-warning">Editar</Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escolha uma categoria ...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListarCategorias;