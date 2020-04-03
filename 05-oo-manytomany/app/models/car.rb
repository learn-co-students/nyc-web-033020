class Car

  attr_reader :make, :model, :classification, :car_owner, :mechanic
  @@all=[]
  def initialize(make, model, classification, car_owner, mechanic)
    @make = make
    @model = model
    @classification = classification
    @car_owner = car_owner 
    @mechanic = mechanic
    Car.all << self

  end

  def self.all
    @@all
  end

  def self.classifications
    self.all.map do |car|
      car.classification
    end
  end

end
