import React from 'react';

const Footer = (props) => {
    if(!props.data){
        return null;
    }

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                    {generateSocialMediaInfo(props.data.social)}
                    </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                    <i className="icon-up-open"></i></a>
                </div>
            </div>
        </footer>
    );
}

const generateSocialMediaInfo = (socialMediaData) => {
    return socialMediaData.map((network) => {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    });
}

export default Footer;
