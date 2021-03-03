import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
    if(!props.data){
        return null;
    }

    const { name, occupation } = props.data;
    const navBarData = [
        {
            "title": "About",
            "href": "#about"
        },
        {
            "title": "Resume",
            "href": "#resume"
        },
        {
            "title": "Films",
            "href": "#portfolio"
        }
    ];

    return (
        <header id="home" className="header-section">
            <NavBar data={navBarData}/>
            <div className="row banner">
                <div className="header-section-row">
                    <div className="type-writer">
                    Hi, I'm {name}.
                    </div>
                </div>
                <p></p>
                <div className="header-section-row">
                    <div className="delay-display-a">
                        Software Engineer
                    </div>
                </div>
                <p></p>
                <div className="header-section-row">
                    <div className="delay-display-b">
                        Underwater Photographer
                    </div>
                </div>
                <p></p>
                <div className="header-section-wrapper">
                    <div className="delay-display-c">
                        Guitarist
                    </div>
                </div>
                <p></p>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    );
}

export default Header;
