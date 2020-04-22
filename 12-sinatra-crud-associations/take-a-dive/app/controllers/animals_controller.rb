class AnimalsController < ApplicationController
# INDEX Action/Method 
  get '/animals' do
    @animals = Animal.all
    erb :"animals/index"
  end

# NEW Action/Method
  get '/animals/new' do
    @aquariums = Aquarium.all
    erb :"animals/new"
  end 

# CREATE Action/Method
  post '/animals' do 
    animal = Animal.create(params)
   
    redirect to "/animals/#{animal.id}"    
  end 

# EDIT Action/Method
  get '/animals/:id/edit' do
    @animal = Animal.find(params[:id])
    
    erb :"animals/edit"
  end
  
# PATCH Action/Method
  patch '/animals/:id' do
    animal = Animal.find(params[:id])
    animal.update(params[:animal])  

    redirect to "/animals/#{animal.id}"
  end 

# SHOW Action/Method
  get '/animals/:id' do
    @animal = Animal.find(params[:id])
  
    erb :"animals/show"
  end

# DELETE Action/Method
  delete '/animals/:id' do
    animal = Animal.find(params[:id])
    animal.destroy

    redirect to "/animals"
  end

end 