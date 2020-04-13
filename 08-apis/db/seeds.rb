require 'rest-client'
require 'pry'

Food.delete_all
response = RestClient.get('http://localhost:3000/foods')
data = JSON.parse(response)

# What should I do now that I have my data?
data.each do |food_hash|
    # {name: ""}
    Food.create(food_hash)
end

# Food.create(name: "spinach")
# Food.create(name: "steak")
# Food.create(name: "spaghetti")
# Food.create(name: "pizza")










