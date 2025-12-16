import './body.css'
import divider from "../assets/divider.svg"
import Arrow from "./arrow.tsx"
import IconButton from '@mui/material/IconButton';
import { IoLogoGithub } from "react-icons/io";
import { FaBandcamp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import profilePic from "../assets/JackGraduate.jpg"
import React from "react";
import Typed from 'typed.js';



function Body(){

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Developer', 'Composer', 'Game Designer', 'Problem Solver'],
            typeSpeed: 50,
            backDelay: 1200,
            backSpeed: 50,
            loop: true,
            
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);



    return (
        <>
            <div className="hi">
                <h2 className="begin" style={{ marginBottom: "0"}}>Hi, my name is...</h2>
            </div>
            <div className="startText">
                <h1 style={{ margin: "0"}}>Jack Haddad</h1>
                <h2 className="begin, typing">I am a... <span ref={el}/></h2>
                <div style={{width:"405px", margin:"auto"}}>
                    <p>At the intersection of creativity and technology, I stand proud and pursue a better, kinder future.</p>
                </div>
            </div>
            <div style={{ width: "100%"}}>
                <Arrow />
            </div>
            
            <img src={divider} style={{ width: "100%"}}/>
            <div className="purple">
            <div id="about" style={{ margin: "-200px 0 200px 0"}}></div>
                <div className="aboutDiv">
                    <div className="aboutDivText">
                        <h2>About Me</h2>
                        <p>I’m a graduate from the University of Virginia’s College of Arts and Sciences, majoring in Computer Science and Music. My unmatched creativity and unyielding perseverance allow me to find unique and efficient solutions to whatever problems come my way. I learn by understanding, and my curiosity always drives me towards new and interesting things.<br /><br />In my free time, I enjoy rolling math rocks (D&D), setting and spiking (volleyball), and eating books (reading). I also love descending into the depths of Hallownest, reaching the peak of Celeste mountain, and racing go-karts with Mario.</p>
                    </div>
                    <img src={profilePic} className="graduateImg"/>
                </div>
                <div id="projects"></div>
                <div className="projectsDiv">
                    <h2>Projects</h2>
                    <div className="projectSectionsDiv">
                        <div className="projectSection">
                            <h3>Check out my code repos:</h3>
                            <ul>
                                <li><a href="https://github.com/TheLavenderJack/sprun-share-public" target="_blank">SprunShare</a></li>
                                <li><a href="https://github.com/TheLavenderJack/Shwoomp" target="_blank">Game Jam Entries</a></li>
                                <li>And More!</li>
                            </ul>
                            <IconButton aria-label="github" onClick={() => {window.open("https://github.com/TheLavenderJack", "_blank")}}><IoLogoGithub size={60}/></IconButton>
                            
                            
                        </div>
                        <div className="projectSection">
                            <h3>Listen to my original music:</h3>
                            <ul>
                                <li><a href="https://lavenderjack.bandcamp.com/album/singeli-sounds-b" target="_blank">Singeli</a></li>
                                <li><a href="https://lavenderjack.bandcamp.com/album/gym-leader-themes" target="_blank">Pokémon Gym Themes</a></li>
                                <li>And More!</li>
                            </ul>
                            <IconButton aria-label="bandcamp" onClick={() => {window.open("https://lavenderjack.bandcamp.com", "_blank")}}><FaBandcamp size={60}/></IconButton>
                        </div>

                    </div>
                </div>

                <div id="contact" className="contactDiv">

                    <h2>Contact</h2>
                    <div>
                        <IconButton aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/jackhaddad143/", "_blank")}><FaLinkedin size={60}/></IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="Email" onClick={() => location.href = "mailto:jackhaddad143@gmail.com"}><IoMdMail size={60}/></IconButton>
                    </div>
                </div>

                <footer>© 2025 Jack Haddad. All Rights Reserved.</footer>
            </div>
        </>
    )




}










export default Body