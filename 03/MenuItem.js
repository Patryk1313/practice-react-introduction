import ReactDOM from 'react-dom/client'
import React from "react";
import { createRoot } from 'react-dom/client';


const MenuItem = props => {
    return (
        <>
        <li className='listElement'><a className='aElement' url={props.url}>{props.text}</a></li>
        </>
    )
}

export default MenuItem