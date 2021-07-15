import React, { useState } from "react";
import * as api from "../services/Endpoints"

const NovoUsuario = () => {
    const estadoInicial = { email: '', name: '', password: '', phone: '' };
    // const [usuario, setUsuario] = useState([]);
    const [usuario, setUsuario] = useState(estadoInicial);
    const [submitted, setSubmitted] = useState(false);

    const trataCampo = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const novo = () => {
        setUsuario(estadoInicial);
        setSubmitted(false);
    };

    const enviarRequisicao = () => {
        var data = {
            email: usuario.email,
            name: usuario.name,
            password: usuario.password,
            phone: usuario.phone         
            
        };
        console.log(data)
        api.postUser(data)
            .then(response => {
                setUsuario({
                    email: response.data.email,
                    name: response.data.name,
                    password: response.data.password,
                    phone: response.data.phone                      
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
                <div className="submit-form">
                    {submitted ? (
                        <div>
                            <h4>Usuário cadastrado com sucesso!</h4>
                            <button className="btn btn-primary" onClick={novo}>Novo</button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group">
                                <center> <h3>Novo Usuário</h3></center>
                                <br />
                                <h5>E-mail</h5>                                
                                <input className="form-control mb-3" type="text" name="email" value={usuario.email} onChange={trataCampo} /> 
                                <h5>Nome</h5>
                                <input className="form-control mb-3" type="text" name="name" value={usuario.name} onChange={trataCampo} />
                                <h5>Senha</h5>                                                              
                                <input className="form-control mb-3" type="password" name="password" value={usuario.password} onChange={trataCampo} /> 
                                <h5>Telefone</h5> 
                                <input className="form-control mb-3" type="tel" name="phone" value={usuario.phone} onChange={trataCampo} />                         
                                                        
                               <button onClick={enviarRequisicao} className="btn btn-primary mt-4">Cadastrar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NovoUsuario;