import React from 'react';
import YouTube from 'react-youtube';

const Portfolio = (props) => {
    if (!props.data) {
        return null;
    }

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out My Underwater Films</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {generateProjects(props.data.projects)}
                    </div>
                </div>
            </div>
        </section>
    );
}

const generateProjects = (projectsData) => {
    return projectsData.map((project) => {
        const videoId = project.videoId;
        return (
            <div className="row" key={videoId}>
                <YouTube videoId={videoId} />
            </div>
        )
    });
}

export default Portfolio;
