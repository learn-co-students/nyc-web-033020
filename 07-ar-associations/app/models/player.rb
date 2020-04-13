class Player < ActiveRecord::Base 
    has_many :games
    has_many :basketballs, through: :games

    # def basketball
    #     @basketball
    # end
end