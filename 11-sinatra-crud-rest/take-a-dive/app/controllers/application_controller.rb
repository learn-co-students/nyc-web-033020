require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  # get "/" do
  #   erb :welcome
  # end

  get '/animals' do
    @animals = Animal.all
    erb :index
  end

  get '/animals/new' do
    erb :new
  end 

  post '/animals' do 
    animal = Animal.create(params)
   
    redirect to "/animals/#{animal.id}"    
  end 

  get '/animals/:id/edit' do
    @animal = Animal.find(params[:id])
    
    erb :edit
  end
  
  patch '/animals/:id' do
    animal = Animal.find(params[:id])
    animal.update(params[:animal])

    redirect to "/animals/#{animal.id}"
  end 

  get '/animals/:id' do
    @animal = Animal.find(params[:id])
  
    erb :show
  end


end
