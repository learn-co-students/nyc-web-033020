require 'sinatra'
require 'pry'

get '/test' do
  "WORKED!!!!!"
end 

get '/users/:id' do 
  binding.pry
  # user = User.find(params[:id])

  # <h1>user.name</h1>
end 