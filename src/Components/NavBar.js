import React from 'react';

const NavBar = (props) => {

    if (props.data == null) {
        return null;
    }

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                {generateNavBarList(props.data)}
            </ul>
        </nav>
    );
}

const generateNavBarList = (navBarData) => {
    return navBarData.map((item) => {
        return (<li key={item.href}><a className="smoothscroll" href={item.href}>{item.title}</a></li>)
    });
}

export default NavBar;
