import React from 'react';

const Resume = (props) => {
    if(!props.data) {
        return null;
    }

    const { education, work, skills } = props.data;

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        {generateEducationInfo(education)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {generateWorkInfo(work)}
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="bars">
                        <ul className="skills">
                            {generateSkillsInfo(skills)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

const generateEducationInfo = (educationData) => {
    return educationData.map((education) => {
        return (
            <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                {education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
            </div>
        )
    });
}

const generateWorkInfo = (workData) => {
    return workData.map((work) => {
        return (
            <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        )
    });
}

const generateSkillsInfo = (skillsData) => {
    return skillsData.map((skill) => {
        let className = 'bar-expand '+ skill.name.toLowerCase();
        return (<li key={skill.name}><span style={{width:skill.level}}className={className}></span><em>{skill.name}</em></li>)
    });
}

export default Resume;
