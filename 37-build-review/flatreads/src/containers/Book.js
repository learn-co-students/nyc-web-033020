import React from 'react';
import Cover from '../components/Cover'
import Details from '../components/Details'

class Book extends React.Component {
    state = {
        isToggled: true
    }
    
    toggleState = () => {
        // functional setState when you are basing state on a previous version of state
        // use parens to implicitly return an object 
        this.setState(prevState => ({ isToggled: !prevState.isToggled }) )
    }

    render() {
        let { cover_url, author, title, blurb } = this.props;
        return (
            <div className="book" onClick={this.toggleState}>
                {/* <button >Toggle State</button> */}
                {this.state.isToggled ? <Cover url={cover_url} title={title}/> : <Details title={title} author={author} blurb={blurb} /> }
            </div>
        )
    }
}

export default Book;