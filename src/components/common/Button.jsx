import React from 'react'

const Button = ({ onClick, className, children }) => {
    return <button onClick={onClick} className={`primary_btn ${className}`}>{children}</button>
}

export default Button
