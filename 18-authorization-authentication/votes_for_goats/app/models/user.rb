class User < ApplicationRecord
  has_many :votes 
  has_many :goats, through: :votes

  has_secure_password

  # def password=(secret)
  #   hash_pass = BCrypt::Password.create(secret)
  #   self.password_digest = hash_pass
  # end 

  # def password
  # end 
end
