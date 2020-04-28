class VotesController < ApplicationController
  def new 
    @vote = Vote.new
    @goats = Goat.all
    @users = User.all
    
    render :new
  end 

  def create 
    vote = Vote.create(vote_params)

    redirect_to user_path(vote.user)
  end 

  private 

  def vote_params
    params.require(:vote).permit(:user_id, :goat_id, :content)
  end 
end
