import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"

const EditaCategoria = props => {
    const estadoInicial = {
        id: null,
        name: ""
    };

    const [categoria, setCategoria] = useState(estadoInicial);
    const [message, setMessage] = useState("");

    const getCategoria= (id) => {
        api.get(id)
            .then(response => {
                setCategoria(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(
        () => { getCategoria(props.match.params.id); },
        [props.match.params.id]
    );

    const trataCampo = event => {
        const { name, value } = event.target;
        setCategoria({ ...categoria, [name]: value });
    };

    const atualizarCategoria = () => {
        api.update(categoria.id, categoria)
            .then(response => {
                console.log(response.data);
                setMessage("Categoria atualizada!");
            })
            .catch(e => { console.log(e); });
    };

    const excluirCategoria = () => {
        api.remove(categoria.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/categorias");
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div>
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                    {categoria ? (
                        <div className="edit-form">
                            <h4>Categoria</h4>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={categoria.name}
                                        onChange={trataCampo}
                                    />
                                </div>
                            </form>
                            <br />
                            <button className="btn btn-danger danger" onClick={excluirCategoria}>Excluir</button>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-primary" onClick={atualizarCategoria}>
                                Atualizar
                            </button>
                            <p>{message}</p>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Selecione uma categoria ...</p>
                        </div>
                    )}
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default EditaCategoria;