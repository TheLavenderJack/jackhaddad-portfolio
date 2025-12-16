import IconButton from '@mui/material/IconButton';
import { FaHouse } from "react-icons/fa6";
import './header.css'


function Header(){
    return (
        <>
            <div id="header" className="sticky">
                <div className="headerHomeBtn">
                    <IconButton><FaHouse onClick={() => {scrollTo(0, 0)}}/></IconButton>
                </div>
                <div className="headerBtns">
                    <button onClick={() => {location.href = "#about"}}>About</button>
                    <button onClick={() => {location.href = "#projects"}}>Projects</button>
                    <button onClick={() => {location.href = "#contact"}}>Contact</button>
                </div>
            </div>
        </>
    )
}


export default Header