import React, { useState, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css'

const initialValue = {
    email: '',
    password: '',
}

const Form = () => {
    const [values, setValues] = useState({ initialValue });
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('https://projeto-integrador-4.herokuapp.com/auth/login', values)
            .then((response) => {
                console.log(response);
                setToken(response.data.token);
                history.push('/');
            });

    }

    return (
        <div className="layoutLogin">
            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" placeholder="Seu email" onChange={onChange} value={values.user}/>
                    <label htmlFor="password">Senha</label>
                    <input id="password" name="password" type="password" placeholder="Senha" onChange={onChange}/>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
};

export default Form;