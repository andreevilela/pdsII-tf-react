import React, { useState } from "react";
import * as api from "../services/Endpoints"

const NovaCategoria = () => {
    const estadoInicialCategoria = {
        id: null,
        name: "",
        description: "",
        price: "",
        imgUrl: ""
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
            name: categoria.name,
            description: categoria.description,
            price: categoria.price
        };
        console.log(data)
        api.createP(data)
            .then(response => {
                setCategoria({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price
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
                                <center> <h3>Novo Produto</h3></center>
                                <br />
                                <h5>Nome</h5>                                
                                <input className="form-control mb-3" type="text" name="name" value={categoria.name} onChange={trataCampo} /> 
                                <h5>Descrição</h5>
                                <input className="form-control mb-3" type="text" name="description" value={categoria.description} onChange={trataCampo} />
                                <h5>Preço</h5>                                                              
                                <input className="form-control mb-3" type="text" name="price" value={categoria.price} onChange={trataCampo} /> 
                                           
                                                        
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