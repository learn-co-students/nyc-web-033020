import React from 'react';

const ChannelsContainer = props => {

    const renderChannelRow = (channel) => {
        const { id, name } = channel
        const { selectChannel, selectedChannel } = props;
        return (
            <div 
                className={selectedChannel === id ? 'active channel' : 'channel'}
                key={id} 
                onClick={() => selectChannel(id)}>
                    # {name}
            </div>
        )
    }

    return (
        <div className="channels container">
            <h2>Channels</h2>
            { props.channels.map(channel => renderChannelRow(channel))
            /** TODO: render all channels here using the helper method above. 
             *         ADVANCED: render into starred OR general below
             */}
            <h3>Starred</h3>
            <h3>General</h3>
            
        </div>
    )
}

export default ChannelsContainer;