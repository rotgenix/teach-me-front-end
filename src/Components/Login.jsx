import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../main';

const Login = () => {
    useEffect(() => {
        const checkLogin = async () => {
            const { data } = await axios.get("http://localhost:5000/login", {
                withCredentials: true,
            })

            if (data.success === false) {
                Navigate('/');
            }
        }
        checkLogin();
    }, [])

    const { setIsAuthenticated } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const submitlogin = async () => {
        const { data } = await axios.post("http://localhost:5000/login", {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })

        if (data.success === 'true') {
            // console.log(data);
            // alert(data.messsage);
            setIsAuthenticated(true);
            // alert(data.messsage);
            return Navigate('/');
        }
        else {
            setIsAuthenticated(false);
            // alert(data.messsage);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="form-input">
                    <label htmlFor='email'>Email</label>
                    <input
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type='email'
                        name='email'
                        placeholder='Your Email'
                    />
                </div>
                <div className="form-input">
                    <label htmlFor='password'>Password</label>
                    <input
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type='text'
                        name='password'
                        placeholder='Your Password'
                    />
                </div>
                <button
                    className='submit'
                    type='submit'
                    onClick={submitlogin}
                >Log In</button>
            </div>

        </>

    )
}

export default Login