import React, { useState } from "react";
import * as api from "../services/Endpoints"

const NovaCategoria = () => {
    const estadoInicialCategoria = {
        id: null,
        name: ""
    };
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [submitted, setSubmitted] = useState(false);

    const trataCampo = (event) => {
        const { name, value } = event.target;
        setCategoria({ ...categoria, [name]: value });
    };

    const novo = () => {
        setCategoria(estadoInicialCategoria);
        setSubmitted(false);
    };

    const enviarRequisicao = () => {
        var data = {
            name: categoria.nome
        };
        console.log(data)
        api.create(data)
            .then(response => {
                setCategoria({
                    id: response.data.id,
                    nome: response.data.nome
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-6">
                <div className="submit-form">
                    {submitted ? (
                        <div>
                            <h4>Categoria cadastrada com sucesso!</h4>
                            <button className="btn btn-primary" onClick={novo}>Novo</button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group">
                                <h4>Categoria</h4>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    required
                                    value={categoria.nome}
                                    onChange={trataCampo}
                                    name="nome"
                                />
                            </div>

                            <button onClick={enviarRequisicao} className="btn btn-primary mt-4">Cadastrar</button>
                        </div>
                    )}
                </div>
            </div>
            <div class="col-md-3">
            </div>
        </div>
    );
}

export default NovaCategoria;