import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/JoinCard.css'

const JoinCard = ({ img, text, pageLink }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <Link to={pageLink}>{text}</Link>
            </div>
        </>
    )
}

export default JoinCard