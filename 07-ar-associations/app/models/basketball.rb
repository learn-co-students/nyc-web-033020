class Basketball < ActiveRecord::Base
    has_many :games
    has_many :players, through: :games

    # def games 
    #     Games.all.select do |g|
    #         g.basketball == self
    #     end
    # end
    # def players 
    #     games.map do |g|
    #         g.player
    #     end
    # end

end