import React, { useEffect } from 'react'
import './FirstLayer.css'
import Email from '../images/email.png'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Me from '../images/budiagung.png'
import {FaHtml5,FaCss3Alt,FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'

const FirstLayer = () => {

    useEffect(() => {
        const y = document.querySelector('.left')
        y.addEventListener('click',()=>{
            document.querySelector('.name').style.transform= "translate(-150%,0)"
            document.querySelector('.symbol-wrapper').style.transform= "translate(0%,150%)"
            document.querySelector('button').style.transform= "translate(40%,330%)"
            document.querySelector('.image-round').style.transform="scale(0.13) translate(-1050%,387%)"
            document.querySelector('.giveblood-wrapper').style.transform="translate(-160%,0%)"
            document.querySelector('.skilss-wrapper').style.transform="translate(-245%,0%)"
        })

        const z = document.querySelector('.right')
        z.addEventListener('click', ()=> {
            document.querySelector('.name').style.transform= "translate(0%,0)"
            document.querySelector('.symbol-wrapper').style.transform= "translate(0%,0%)"
            document.querySelector('button').style.transform= "translate(0%,0%)"
            document.querySelector('.image-round').style.transform="scale(1) translate(0%,0%)"
            document.querySelector('.giveblood-wrapper').style.transform="translate(0%,0%)"
            document.querySelector('.skilss-wrapper').style.transform="translate(0%,0%)"
        })
    })

    return (
        <>
            <div className="container">

                <div className="nav-wrapper">
                    <div className="navbar">
                        <div className="nav">
                            <ul>
                                <li className="right">About me</li>
                                <li className="left">My work</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="name-wrapper">
                        <div className="name">
                            <h1>Budi </h1>
                            <h1>Agung</h1>
                            <p>A Frontend Developer from Padjadjaran University</p>
                        </div>

                        <a href="https://wa.me/6281284338148" target="_blank" rel="noreferrer">
                            <button>Hire me</button>
                        </a>

                        <div className="symbol-wrapper">
                            <div className="symbol">
                                <a href="https://wa.me/6281284338148" target="_blank" rel="noreferrer">
                                    <div className="email">
                                        <img src={Email} alt="email"/>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/budi-agung-070898/" target="_blank" rel="noreferrer">
                                    <div className="linkedin">
                                        <img src={Linkedin} alt="linkedin"/>
                                    </div>
                                </a>
                                <a href="https://github.com/budiagung070898" target="_blank" rel="noreferrer">
                                    <div className="github">
                                        <img src={Github} alt="github"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="image-wrapper">
                        <div className="image-round">
                            <div className="half-round">
                                <img src={Me} alt="me"/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="content2-wrapper">
                    <div className="giveblood-wrapper">
                        <a href="https://givebloodtrial.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="giveblood"> </div>
                        </a>
                    </div>

                    <div className="skilss-wrapper">
                        <h1>What I Use</h1>
                        <div className="skilss">
                            <div className="skill">
                                <FaHtml5 size={55} color="white"/>
                                <p>HTML 5</p>
                            </div>
                            <div className="skill">
                                <FaCss3Alt size={55} color="white"/>
                                <p>CSS 3</p>
                            </div>
                            <div className="skill">
                                <IoLogoJavascript size={55} color="white"/>
                                <p>Javascript</p>
                            </div>
                            <div className="skill">
                                <FaReact size={55} color="white"/>
                                <p>React JS</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default FirstLayer
