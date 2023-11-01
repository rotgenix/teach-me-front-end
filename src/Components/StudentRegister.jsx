import React from 'react'

import '../Styles/StudentRegister.css'

const StudentRegister = () => {
    return (
        <>
            <div className="student-form">

                <div className="input-container">
                    <div className="form-input">
                        <label htmlFor='name'>Name</label>
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type='text'
                            name='name'
                            placeholder='Your Name'
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor='class'>Class</label>
                        <input
                            onChange={(e) => {
                                setScClass(e.target.value);
                            }}
                            type='number'
                            name='class'
                            placeholder='Your Class'
                        />
                    </div>
                </div>

                <div className="input-container">
                    <div className="form-input">
                        <label htmlFor='school'>School</label>
                        <input
                            onChange={(e) => {
                                setSchool(e.target.value);
                            }}
                            type='text'
                            name='school'
                            placeholder='Your School'
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type='email'
                            name='email'
                            placeholder='Your Email'
                        />
                    </div>
                </div>

                <div className="input-container">
                    <div className="form-input">
                        <label htmlFor='number'>Number</label>
                        <input
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                            type='number'
                            name='number'
                            placeholder='Your Number'
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor='password'>Password</label>
                        <input
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
                    onClick={() => {
                        submitForm
                    }}
                >Submit</button>

            </div>
        </>
    )
}

export default StudentRegister