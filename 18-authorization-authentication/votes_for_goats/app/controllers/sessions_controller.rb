class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create]

  def reset_counter
    session[:page_counter] = 3
    redirect_back fallback_location: goats_path
  end 

  def new 
  end 

  def create
    @user = User.find_by(name: params[:session][:name])
  
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else 
      flash[:error] = "Username or Password not right"
      redirect_to new_login_path
    end 
  end 

  def destroy
    session[:user_id] = nil
    # session.delete(:user_id)

    redirect_to users_path
  end 
end 