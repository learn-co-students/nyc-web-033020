Animal.destroy_all

animals = [
  {name: "Nemo", age: 15, species: "Clown Fish", img_url: ""},
  {name: "Jeninfer", age: 3, species: "Star Fish",img_url: "" },
  {name: "Penny", age: 8, species: "penguin", img_url: ""},
  {name: "Teddy", age: 10, species: "Polar Bear", img_url: ""}

]

animals.each do |animal|
  Animal.create(animal)
end 