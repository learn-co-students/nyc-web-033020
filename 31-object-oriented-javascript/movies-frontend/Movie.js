/* 

1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Score: 9"

*/  
class Movie {
  constructor(title, year, imageUrl, genre, score){
    this.title = title;
    this.year = year;
    this.imageUrl = imageUrl;
    this.genre = genre;
    this.score = score;
  }

  prettyPrint = () =>{
    console.log(`Title:${this.title}, Year:${this.year}, Score:${this.score}`)
  }
}
