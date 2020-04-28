class GoatsController < ApplicationController
  before_action :find_goat, only: [:show, :edit, :update, :destroy]

  def index 
    @goats = Goat.all
    # render :index
  end

  def show 
    # @goat = Goat.find(params[:id])
    # render :show
  end 

  def new 
    @goat = Goat.new
    # render :new
  end 

  def create 
    @goat = Goat.create(goat_params)
    
    redirect_to goat_path(@goat)
    # redirect_to goat
  end 

  def edit 
    # @goat = Goat.find(params[:id])
    # render :edit
  end 
  
  def update
    # @goat = Goat.find(params[:id])
    @goat.update(goat_params)

    # redirect_to goat_path(goat.id)
    redirect_to goat_path(@goat)
    # redirect_to goat
  end 

  def destroy 
    # @goat = Goat.find(params[:id])
    @goat.destroy 

    redirect_to goats_path
  end 

  private 

  def goat_params
    params.require(:goat).permit(:name, :age, :occupation)
  end 

  def find_goat
    @goat = Goat.find(params[:id]) 
  end 

end
