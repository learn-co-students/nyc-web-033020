# Replace the '__' in the below methods to to make the specs pass!
# Each '__' corresponds to a single line of code you will need to write.
# See the example below on the left and how it should look on the right.
# def make_a_new_movie_instance    # def make_a_new_movie_instance
#   movie = __                     #   movie = Movie.new
# end                              # end

def can_be_instantiated_and_then_saved
  movie = Movie.new
  movie.title = "This is a title."
  movie.save
  # movie.title
  # Movie.find_by(title: ) => movie_new.title
end

def can_be_created_with_a_hash_of_attributes
  # Initialize movie and then and save it
  attributes = {
      title: "The Sting",
      release_date: 1973,
      director: "George Roy Hill",
      lead: "Paul Newman",
      in_theaters: false
  }

  # mass assignment 
  # create instances with hashes instead of individual arguments

  movie = Movie.create(attributes)
  # Movie.new
  # movie.save

end

def can_be_created_in_a_block(args = {title: "Home Alone", release_date: 1990})
  # If no arguments are passed, use default values:
  # title == "Home Alone"
  # release_date == 1990
  
  # Movie.new(hash).save

  Movie.create do |m|
    m.title = args[:title]
    m.release_date = args[:release_date]
  end
end

def can_get_the_first_item_in_the_database
  Movie.all.first
  # => [m1,m2]
  # SELECT * from movies 
 
end

def can_get_the_last_item_in_the_database
  Movie.all.last
end

def can_get_size_of_the_database
  Movie.all.count
end

def can_find_the_first_item_from_the_database_using_id
  Movie.find_by(id: 1)
  Movie.find(1)
  # => m1
end

def can_find_by_multiple_attributes
  # Search Values:
  # title == "Title"
  # release_date == 2000
  # director == "Me"
  Movie.find_by(title: "Title", release_date: 2000, director: "Me")
end

def can_find_using_where_clause_and_be_sorted
  # For this test return all movies released after 2002 and ordered by 
  # release date descending
  # .order
  
end

def can_be_found_updated_and_saved
  # Updtate the title "Awesome Flick" to "Even Awesomer Flick", save it, then return it
  Movie.create(title: "Awesome Flick")
  movie = Movie.find_by(title: "Awesome Flick")
  movie.update(title:"Even Awesomer Flick")
  movie.save
end

def can_update_using_update_method
  # Update movie title to "Wat, huh?"
  Movie.create(title: "Wat?")
  movie = Movie.find_by(title: "Wat?")
  movie.update(title: "Wat, huh?")
end

def can_update_multiple_items_at_once
  # Change title of all movies to "A Movie"
  5.times do |i|
    Movie.create(title: "Movie_#{i}", release_date: 2000+i)
    # INSERT into movies ______
  end
  

  # Movie.all.each do |m|
  #   m.update(title: "A Movie")
  # end

  Movie.update(title: "A Movie")


end

def can_destroy_a_single_item
  Movie.create(title: "That One Where the Guy Kicks Another Guy Once")
  movie = Movie.find_by(title: "That One Where the Guy Kicks Another Guy Once")
  movie.destroy
end

def can_destroy_all_items_at_once
  10.times do |i|
    Movie.create(title: "Movie_#{i}")
  end
  Movie.destroy_all
end