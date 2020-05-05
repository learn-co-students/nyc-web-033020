class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create, :index]

  def index 
    @users = User.all
  end 

  def show 
    @user = User.find(params[:id])
    if @user == @current_user
      render :show 
    else
      flash[:error] = "Gotta be your own page"
      redirect_to users_path 
    end 

  end 

  def new 
    @user = User.new 
  end 

  def create
    user = User.create(user_params)

    if user.valid?
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:errors] = user.errros.full_messages
      redirect_to new_user_path 
    end 

  end 

  private 

  def user_params
    params.require(:user).permit(:name, :password)
  end 
end
