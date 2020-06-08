import React from 'react';
import SearchBar from '../components/SearchBar';
import BookList from './BookList';

class MainContainer extends React.Component {
    state = {
        books: [],
        search: ''
    }

    componentDidMount() {
        fetch('http://localhost:4001/books')
            .then(res => res.json())
            .then(books => this.setState({ books }) )
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Featured Books</h1>
                <SearchBar />
                <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default MainContainer;