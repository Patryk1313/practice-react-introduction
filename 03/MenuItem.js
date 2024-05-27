import ReactDOM from 'react-dom/client'
import React from "react";
import { createRoot } from 'react-dom/client';

const AElement = props => {
    return <a className='classElement'>{props.text}</a>
}

const MenuItem = props => {
    return (
        <>
        <li className='listElement'>{props.name}<AElement text="Contact"/></li>
        <li className='listElement'>{props.name}<AElement text="About Us"/></li>
        </>
    )
}

export default MenuItem