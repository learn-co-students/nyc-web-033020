class Goat < ApplicationRecord
  has_many :votes 
  has_many :users, through: :votes

  def total_likes
    self.votes.count
  end 
end
