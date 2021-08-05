import React from 'react';
import cloud from '../images/cloud.png'; // with import



function Header() {

    return (<div>

        <div className="top-container">
            <img className="top-cloud" src={cloud} alt="cloud" />
            <div className="head1">

                <h1> I'm Tolu</h1>
                <h2> A programmer.</h2>
            </div>
            <img className="bottom-cloud" src={cloud} alt="cloud" />
            <img className="moutain" src="https://image.flaticon.com/icons/png/256/2920/2920244.png" alt="cloud" />
        </div>

    </div>
    )


}

export default Header