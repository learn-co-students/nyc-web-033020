class GoatsController < ApplicationController
  before_action :find_goat, only: [:show, :edit, :update, :destroy]

  def index 
    @goats = Goat.all
    # render :index
  end

  def show 
    session[:page_counter] ||= 3
    session[:page_counter] = session[:page_counter].to_i - 1

    # cookies[:page_counter] ||= 3
    # cookies[:page_counter] = cookies[:page_counter].to_i - 1

    # if cookies[:page_counter]
    #   cookies[:page_counter] = cookies[:page_counter].to_i - 1
    # else 
    #   cookies[:page_counter] = 3
    # end 

    # @goat = Goat.find(params[:id])
    # render :show
  end 

  def new 
    @goat = Goat.new
    
    # render :new
  end 

  def create 
    @goat = Goat.new(goat_params(:age, :name))
    # @goat = Goat.create(goat_params)
    # if @goat.valid?
    if @goat.save 
      redirect_to goat_path(@goat)
    else
      #  get error messages
      flash[:errors] = @goat.errors.full_messages # returns an array
      # display the new form
      redirect_to new_goat_path
    end 
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

  def goat_params(*args)
    byebug
    params.require(:goat).permit(:name, :age, :occupation)
  end 

  def find_goat
    @goat = Goat.find(params[:id]) 
  end 

end
