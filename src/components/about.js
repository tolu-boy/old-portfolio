import React from 'react';
import boy from '../images/boy.png'; // with import



function About() {

    return (
        <div>

            <div className="middle-container">
                <div className="profile">
                    <img src={boy} alt="" />
                    <h2>Hello.</h2>
                    <p className="intro">I am a andriod and web designer who can help you<br />
                        design websites and build  mobile applications .</p>
                </div>
                <hr />
                <div className="skills">
                    <h2>My Skills.</h2>
                    <div className="skill-row">
                        <img className="front-end" src="https://image.flaticon.com/icons/png/256/4221/4221071.png" alt="" />
                        <h3>Front-End Development </h3>
                        <p>Design and develop application with
                            html,css,javscript,vue,react and flutter.
                            I will help you design your front end applications by transforming figma to real life code
                        </p>
                    </div>
                    <div className="skill-row">
                        <img className="backend-end" src="https://image.flaticon.com/icons/png/256/1045/1045908.png" alt="" />
                        <h3>Back-end Develpment </h3>
                        <p className="back" > Develop database driven solutions with Php,Node,
                            Firebase,PostgreSQL,MSQL,Mongodb,Heroku and Netlify.
                            I will improve your already exsiting app by adding more functionalities
                        </p>
                    </div>
                </div>
                <hr />
                <div className="contact-me">
                    <h2>Get In Touch</h2>
                    <h3>If want to build a website.</h3>
                    <p className="contact-message">Want to build a website ? Lets talk whenever you are ready.
                        I am avaliable anytime.
                    </p>
                    <button class="BUTTON_PHT"> CONTACT ME</button>
                </div>
            </div>



        </div>

    );
}


export default About;