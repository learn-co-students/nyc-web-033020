class CarOwner
  attr_reader :name
  @@all = []
  def initialize(name)
    @name = name
    CarOwner.all << self
  end

  def self.all
    @@all
  end

  # returns all of the CarOwner's cars
  def cars 
   Car.all.select do |car|
    car.owner == self 
   end
  end

  # return all of the CarOwner's mechanics
  def mechanics
   self.cars.map do |car|
      car.mechanic
    end
  end

end

