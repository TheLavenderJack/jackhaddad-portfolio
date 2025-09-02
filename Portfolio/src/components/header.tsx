import { useState } from "react"
import { FaHouse } from "react-icons/fa6";
import './header.css'


function Header(){
    return (
        <>
            <div className="sticky">
                <FaHouse />
                <div className="headerBtns">
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </>
    )
}


export default Header