class Goat < ApplicationRecord
  has_many :votes 
  has_many :users, through: :votes

  # goat name must be unique
  validates :name, uniqueness: true
  # goat age must be over 18
  validates :age, numericality: {greater_than_or_equal_to: 18}
  #validation occupation must not be nill
  validates :occupation, :name, presence: true
  
  
  validate :name_can_not_be_greg

  def name_can_not_be_greg
    if self.name && self.name == 'greg'
      self.errors.add(:name, "Can not have my name!!!")
    end 
  end 


  def total_likes
    self.votes.count
  end 
end
