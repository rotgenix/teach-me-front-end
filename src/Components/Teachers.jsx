import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
import TeacherCard from './TeacherCard';
import '../Styles/Teachers.css'
import { server } from '../App';

const Teachers = () => {
    const Navigate = useNavigate();
    const { isAuthenticated, } = useContext(Context);
    // console.log(isAuthenticated);

    const [teachersArr, setTeachersArr] = useState([]);

    useEffect(() => {

        if (isAuthenticated) {
            const teachers = async () => {
                // console.log("teachers")
                let { data } = await axios.get(`${server}/teachers`);
                const data2 = await data.data;

                setTeachersArr(data2)
            }
            teachers();
            console.log(teachersArr.length)
        }
        else {

            Navigate('/login');
        }
    }, [])

    return (
        <>
            {
                (teachersArr.length > 0) ?
                    <div className="teacher-cards">
                        {
                            teachersArr.map((value, index) => {
                                console.log(value);
                                console.log(value.name);
                                console.log(value.email);
                                console.log(value.qualification);
                                console.log(value.number);
                                return (
                                    <TeacherCard
                                        name={value.name}
                                        qualification={value.qualification}
                                        email={value.email}
                                        number={value.number}
                                        key={index} />
                                )

                            })
                        }
                    </div> :
                    <div className="no-teachers">
                        <h1>No teachers available</h1>
                    </div>
            }
        </>
    )
}

export default Teachers