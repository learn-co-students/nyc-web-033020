import React from 'react';

const Queue = props => {
    console.log(props)
    let currentSong = props.songForQ
    let nextSongInQue = props.nextSong
    console.log(nextSongInQue)
    return (
        <div className="half queue">
            <h2>Queue</h2>
            {currentSong && <iframe 
                title={currentSong.title}
                width="361" 
                height="215" 
                src={`${currentSong.url}?autoplay=1&mute=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
            </iframe>}
            <ol>
             {/* <li>{nextSongInQue.title}</li> */}
            </ol>
        </div>
    )
}

export default Queue;