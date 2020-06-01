import React from 'react';
import { fetchChannelMessages } from '../requests';
import { Message } from '../components'


class MessageContainer extends React.Component {
    state = {
        messages: [],
        viewingTime: 0, // advanced deliverable
        intervalId: null // advanced deliverable
    }

    renderChannelInfo = () => {
        return (
            false  // TODO: what should the condition be here? why do we need a condition at all?
                ? <div>ADD CHANNEL INFO HERE</div>
                : <div>Please select a channel</div>
        )
    }

    render(){
        return (
            <div className="messages container">
                <h2>Messages</h2>
                {this.renderChannelInfo()}
                <div>
                    {this.state.messages.map(message => (
                        <Message key={message.id} {...message}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default MessageContainer;