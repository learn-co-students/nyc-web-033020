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
        let { channelInfo, selectedChannel } = this.props;
        return (
            selectedChannel  // TODO: what should the condition be here? why do we need a condition at all?
                ? <div>{channelInfo.name}{channelInfo.starred ? '✨' : null}</div>
                : <div>Please select a channel</div>
        )
    }

    componentDidUpdate(prevProps){
        if(prevProps.selectedChannel !== this.props.selectedChannel){
            fetchChannelMessages(this.props.selectedChannel)
                .then(messages => {
                    console.log('messages:', messages)
                    this.setState({ messages })
                })
        }
    }

    render(){
        console.log('message container', this.props.selectedChannel)
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