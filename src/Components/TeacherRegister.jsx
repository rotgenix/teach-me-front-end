import React, { useContext, useEffect, useState } from 'react'
import '../Styles/StudentRegister.css'
import axios from 'axios';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';

const TeacherRegister = () => {
    const Navigate = useNavigate();

    useEffect(() => {

        const checkLogin = async () => {
            const { data } = await axios.get("http://localhost:5000/login", {
                withCredentials: true,
            })
           
            if (data.success === false) {
                console.log(data.success)
                alert(data.messsage);
                return Navigate('/');
            }
        }
        checkLogin();
    },[])

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const [name, setName] = useState("");
    const [qualification, setQualification] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/teacherregister", {
                name,
                qualification,
                email,
                number,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            if (data.success === 'false') {
                setIsAuthenticated(false);
                alert(data.messsage);
                return Navigate('/login');
            }
            else {
                setIsAuthenticated(true);
                alert(data.messsage);
                return Navigate('/');
            }
        } catch (error) {
            setIsAuthenticated(false);
        }
        console.log(isAuthenticated);
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <div className="student-form">

                    <div className="input-container">
                        <div className="form-input">
                            <label htmlFor='name'>Name</label>
                            <input
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                type='text'
                                name='name'
                                placeholder='Your Name'
                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor='qualification'>Qualification</label>
                            <input
                                required
                                onChange={(e) => setQualification(e.target.value)
                                }
                                type='text'
                                name='qualification'
                                placeholder='Your Qualification'
                            />
                        </div>
                    </div>

                    <div className="input-container">
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
                            <label htmlFor='number'>Number</label>
                            <input
                                required
                                onChange={(e) => {
                                    setNumber(e.target.value);
                                }}
                                type='number'
                                name='number'
                                placeholder='Your Number'
                            />
                        </div>
                    </div>

                    <div className="input-container">
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
                    </div>
                    <button
                        className='submit'
                        type='submit'
                    >Submit</button>
                </div>
            </form>
        </>
    )
}

export default TeacherRegister