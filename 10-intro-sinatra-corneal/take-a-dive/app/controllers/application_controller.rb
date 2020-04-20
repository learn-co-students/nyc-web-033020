require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/home" do
    erb :welcome
  end

  get '/animals' do
    @animals = Animal.all
    erb :index
  end

end
