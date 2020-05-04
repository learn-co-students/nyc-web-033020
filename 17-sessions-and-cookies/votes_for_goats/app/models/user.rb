class User < ApplicationRecord
  has_many :votes 
  has_many :goats, through: :votes
end
