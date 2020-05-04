class SessionsController < ApplicationController
  def reset_counter
    session[:page_counter] = 3
    redirect_back fallback_location: goats_path
  end 
end 