class Mechanic

  attr_reader :name, :specialty
  @@all=[]
def initialize(name, specialty)
  @name = name
  @specialty = specialty
  Mechanic.all << self
end

def self.all 
  @@all
end


end
