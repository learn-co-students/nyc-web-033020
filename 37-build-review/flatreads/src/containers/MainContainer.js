import React from 'react';
import SearchBar from '../components/SearchBar';
import BookList from './BookList';

class MainContainer extends React.Component {
    state = {
        books: [],
        search: ''
    }

    handleSearch = e => {
        this.setState({ search: e.target.value })
    }

    componentDidMount() {
        fetch('http://localhost:4001/books')
            .then(res => res.json())
            .then(books => this.setState({ books }) )
    }

    render() {
        console.log(this.state)
        let lowerCaseSearch = this.state.search.toLowerCase()
        let searchedBooks = this.state.books
            .filter(book => book.title.toLowerCase().includes(lowerCaseSearch) || book.author.toLowerCase().includes(lowerCaseSearch))
        
        return (
            <div>
                <hr />
                <h1>Featured Books</h1>
                <SearchBar search={this.state.search} handleSearch={this.handleSearch}/>
                <BookList books={searchedBooks}/>
            </div>
        )
    }
}

export default MainContainer;