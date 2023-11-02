import React from 'react'

const TeacherCard = ({ name, qualification, email, number }) => {
    const imgRef = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1698899699~exp=1698900299~hmac=dcfab2fd690640bc04dcb039f3cbda26713a3ee232866418159d77ef825fd8dc';

    return (
        <>
            <div className="teacher-card">
                <img src={imgRef} alt="Avatar" />
                <div className="text-container">
                    <h4>{name}</h4>
                    <p>{qualification}</p>
                    <p>{email}</p>
                    <p>{number}</p>
                </div>
            </div>
        </>
    )
}

export default TeacherCard