import React from 'react';
// import ReactPlayer from "react-player";

const Music = (props) => {
    if (!props.data) {
        return null;
    }

    return (
        <section id="music">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out My Music On <a href={props.data.music}>Soundcloud</a></h1>
                </div>
            </div>
        </section>
    );
}

// Maybe integrate later
// const generateMusicPlayers = (musicData) => {
//     return musicData.map((songUrl) => {
//         return (
//             <div className="row" key={songUrl}>
//                 <ReactPlayer url={songUrl} />
//             </div>
//         )
//     });
// }

export default Music;
