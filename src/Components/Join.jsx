import React, { useEffect } from 'react'

import teacher from '../assets/teacher.svg'

import student from '../assets/student.svg'

import JoinCard from './JoinCard'

import '../Styles/Join.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { server } from '../App'

const Join = () => {
    const Navigate = useNavigate();

    useEffect(() => {

        const checkLogin = async () => {
            const { data } = await axios.get(`${server}/login`, {
                withCredentials: true,
            })

            if (data.success === false) {
                console.log(data.success)
                alert(data.messsage);
                return Navigate('/');
            }
        }
        checkLogin();
    }, [])


    return (
        <>
            <div className="join">
                <div>
                    <JoinCard img={student} text='I am Student' pageLink='/studentregister' />
                    <JoinCard img={teacher} text='I am Teacher' pageLink='/teacherregister' />
                </div>
                <h2>Already have an account? <Link to='/login'>Log In Here</Link></h2>
            </div>

        </>
    )
}

export default Join