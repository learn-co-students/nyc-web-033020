class Owner
  # code goes here
  attr_reader :name, :species
  @@all = []
  def initialize(name)
    @name = name 
    @species = "human" 
    Owner.all << self
    # save
  end


  def cats 
    # return all of the specific owner's cats 
    # Cat.all => [cat1, cat2, cat3, cat4]

    # [cat1, cat2]
    # cat1.owner => owner1
    # cat2.owner => owner1
    # cat3.owner => owner3
    # cat4.owner => owner4
    Cat.all.select do |cat|
      cat.owner == self #owner1
      # first: owner1
      # second: owner1
      # third: owner3
      # fourth: owner4
    end
    # array of just this owner's cats: [cat1, cat2]
  end





  def say_species
    # @species
    "I am a #{self.species}."
  end

  # def save
  #     Owner.all << self
  # end

  def self.all 
    @@all
  end

  def self.count
    all.count
  end

  def self.reset_all
    all.clear
  end

end