import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="error">
            <p style={{ fontWeight: 1000, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", margin: "8rem 0 0 0" }}>404</p>
            <p style={{ fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>Nothing found :(</p>
            <Link to={"/"}>
                <button style={{ padding: "1.3rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", backgroundColor: 'rgb(118, 161, 255)', margin: "auto", border: "none" }}>Go Home</button>
            </Link>
        </div>
    )
}

export default Error