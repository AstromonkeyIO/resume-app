import React from 'react';

const About = (props) => {
    if (!props.data) {
        return null;
    }

    const { image, bio, email, resumeDownload } = props.data;
    const profilePic = "images/" + image;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"  src={profilePic} alt="Tom Lee Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Email</h2>
                            <p className="address">
                            <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                            <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
