require 'pry'

# car = {make: "toyota", model: "camry", serial_number: 1234}

# Car factory
    # remember what the blueprint of a car is 
    # pump out new cars any time I need 

    #toyota factory
class Car
    # attr_reader :serial_number
    # attr_writer :make, :model
    attr_accessor :make, :model
    def initialize(make, model, serial_number)
        @make = make
        @model = model 
        @serial_number = serial_number
    end

    # instance method
    # def make 
    #     @make
    # end
    
    # def make=(make)
    #     @make = make
    # end
    
end


car = Car.new("toyota", "camry", 1234)
car2 = Car.new("nissan", "camry", 1234)
# object.send(:count)
# [].count


# a new version of a toyota car
# car = Car.new

# I didn't initialize it into class
# It is not an instance method 
binding.pry 

"something"