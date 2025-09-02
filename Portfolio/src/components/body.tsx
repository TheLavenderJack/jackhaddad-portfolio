import { useState } from "react"
import './body.css'
import divider from "../assets/divider.svg"


function Body(){
    return (
        <>
            <div>
                <h2>Hi, my name is...</h2>
                <h1>Jack Haddad</h1>
                <h2>Software Dev | Composer | Game Designer</h2>
                <p>At the intersection of creativity and technology, I stand proud and pursue a better, kinder future.</p>
            </div>
            <img src={divider} style={{ width: "100%"}}/>
        </>
    )




}










export default Body