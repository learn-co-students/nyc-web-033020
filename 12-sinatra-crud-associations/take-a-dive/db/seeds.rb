Animal.destroy_all
Aquarium.destroy_all

Aquarium.create(name: "Big Blue", city: "NYC")
Aquarium.create(name: "Okay Aquarium", city: "Boston")
Aquarium.create(name: "Sea World", city: "San Diego")


animals = [
  {name: "Nemo", age: 15, species: "Clown Fish", img_url: "https://www.celebrationspress.com/wp-content/uploads/2017/11/112717Nemo.png", aquarium_id: Aquarium.all.sample.id},
  {name: "Jeninfer", age: 3, species: "Star Fish",img_url: "https://i.dailymail.co.uk/1s/2019/07/31/17/16731048-0-image-a-50_1564592188929.jpg",  aquarium_id: Aquarium.all.sample.id},
  {name: "Penny", age: 8, species: "penguin", img_url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/1000x-1.jpg", aquarium_id: Aquarium.all.sample.id},
  {name: "Teddy", age: 10, species: "Polar Bear", img_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg", aquarium_id: Aquarium.all.sample.id}
]

animals.each do |animal|
  Animal.create(animal)
end 
