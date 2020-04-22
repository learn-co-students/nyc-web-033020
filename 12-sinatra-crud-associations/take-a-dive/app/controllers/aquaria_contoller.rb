class AquariaController < ApplicationController
# SHOW Action/Method
  get "/aquaria/:id" do
    @aquarium = Aquarium.find(params[:id])

    erb :"aquaria/show"
  end 
end 