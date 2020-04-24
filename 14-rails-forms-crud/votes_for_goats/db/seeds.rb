# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Goat.destroy_all

puts ".... Generating Goats"
20.times do 
  Goat.create(name: Faker::FunnyName.name, age: rand(20..100), living: true, img_url: Faker::Fillmurray.image, occupation: Faker::Job.field)
end 