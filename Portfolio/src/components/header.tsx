import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import { FaHouse } from "react-icons/fa6";
import './header.css'


function Header(){
    return (
        <>
            <div className="sticky">
                <IconButton><FaHouse /></IconButton>
                <div className="headerBtns">
                    <button onClick={() => {location.href = "#about"}}>About</button>
                    <button onClick={() => {location.href = "#projects"}}>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </>
    )
}


export default Header