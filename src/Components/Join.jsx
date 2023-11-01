import React from 'react'

import teacher from '../assets/teacher.svg'

import student from '../assets/student.svg'

import JoinCard from './JoinCard'

import '../Styles/Join.css'

const Join = () => {
    return (
        <>
            <div className="join">
                <JoinCard img={student} text='I am Student' pageLink='/studentregister' />
                <JoinCard img={teacher} text='I am Teacher' pageLink='/teacherregister' />
            </div>
        </>
    )
}

export default Join