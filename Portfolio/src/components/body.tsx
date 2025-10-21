import { useState } from "react"
import './body.css'
import divider from "../assets/divider.svg"
import Arrow from "./arrow.tsx"
import profilePic from "../assets/JackGraduate.jpg"


function Body(){
    return (
        <>
            <div className="hi">
                <h2 className="begin" style={{ marginBottom: "0"}}>Hi, my name is...</h2>
            </div>
            <div className="startText">
                <h1 style={{ margin: "0"}}>Jack Haddad</h1>
                <h2 className="begin">Software Dev | Composer | Game Designer</h2>
                <div style={{width:"405px", margin:"auto"}}>
                    <p>At the intersection of creativity and technology, I stand proud and pursue a better, kinder future.</p>
                </div>
            </div>
            <div style={{ width: "100%"}}>
                <Arrow />
            </div>
            
            <img src={divider} style={{ width: "100%"}}/>
            <div className="purple">
                <div className="aboutDiv">
                    <div className="aboutDivText">
                        <h2>About Me</h2>
                        <p>I’m a graduate from the University of Virginia’s College of Arts and Sciences, majoring in Computer Science and Music. My unmatched creativity and unyielding perseverance allow me to find unique and efficient solutions to whatever problems come my way. I learn by understanding, and my curiosity always drives me towards new and interesting things.<br /><br />In my free time, I enjoy rolling math rocks (D&D), setting and spiking (volleyball), and eating books (reading). I also love descending into the depths of Hallownest, reaching the peak of Celeste mountain, and racing go-karts with Mario.</p>
                    </div>
                    <img src={profilePic} className="graduateImg"/>
                </div>
                <div className="projectsDiv">
                    <h2>Projects</h2>
                    <div className="projectSectionsDiv">
                        <div className="projectSection">
                            <h3>Check out my code repos:</h3>
                            <ul>
                                <li><a href="https://github.com/TheLavenderJack/sprun-share-public">SprunShare</a></li>
                                <li><a href="https://github.com/TheLavenderJack/Shwoomp">Game Jam Entries</a></li>
                                <li>And More!</li>
                                {/*github icon here w/ this link: https://github.com/TheLavenderJack*/}

                            </ul>
                        </div>
                        <div className="projectSection">/
                            <h3>Listen to my original music:</h3>
                            <ul>
                                <li><a href="https://lavenderjack.bandcamp.com/album/singeli-sounds-b">Singeli</a></li>
                                <li><a href="https://lavenderjack.bandcamp.com/album/gym-leader-themes">Pokémon Gym Themes</a></li>
                                <li>And More!</li>
                                {/*bandcamp logo w/ this link: https://lavenderjack.bandcamp.com*/}
                            </ul>
                        </div>

                    </div>


                </div>
            
            
            </div>
        </>
    )




}










export default Body