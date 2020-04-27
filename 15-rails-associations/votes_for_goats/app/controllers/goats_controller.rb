class GoatsController < ApplicationController
  def index 
    @goats = Goat.all
    # render :index
  end

  def show 
    @goat = Goat.find(params[:id])
    # render :show
  end 

  def new 
    @goat = Goat.new
    # render :new
  end 

  def create 
    goat = Goat.create(goat_params)
    
    redirect_to goat_path(goat)
    # redirect_to goat
  end 

  def edit 
    @goat = Goat.find(params[:id])
    # render :edit
  end 
  
  def update
    goat = Goat.find(params[:id])
    goat.update(goat_params)

    # redirect_to goat_path(goat.id)
    redirect_to goat_path(goat)
    # redirect_to goat
  end 

  private 

  def goat_params
    params.require(:goat).permit(:name, :age, :occupation)
  end 

end
