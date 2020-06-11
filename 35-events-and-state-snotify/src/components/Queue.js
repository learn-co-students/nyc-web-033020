import React from 'react';

const Queue = props => {
    const{currentSong,deleteSong,queues} = props
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
            {queues&&<ol>
               
                {/**
                 * TODO: Render all the songs in your queue here!
                 * 
                 */}
                 {queues.map(song=> <li key={song.id}>{song.title} <button onClick={()=>deleteSong(song.id)}>x</button></li> )}

            </ol>}
        </div>
    )
}



export default Queue;




