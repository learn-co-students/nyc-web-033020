Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # resources :goats, only: [:index, :show, :new, :create, :edit, :update]
  # resources :goats, except: [:destroy]
  resources :goats
  resources :votes, only: [:new, :create]
  resources :users, only: [:show, :index]

  # get '/goats', to: 'goats#index', as: 'goats'
  # get '/goats/:id', to: 'goats#show', as: 'goat'
  # get '/goats/new', to: 'goats#new', as: 'new_goat'
  # post '/goats', to: 'goats#create'
end
