class Cat
  # code goes here
  attr_reader :name 
  attr_accessor :owner, :mood

  @@all = []
  def initialize(name, owner, mood = "nervous")
    @name = name 
    @owner = owner
    @mood = mood
    Cat.all << self
  end

  # def owner 
  #   @owner
  # end

  def self.all 
    @@all
  end

end

# Cat knows who it's owner is 