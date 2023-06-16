Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cars/index'
      post 'cars/create'
      post 'users/signin', to: 'sessions#create'
      get 'users/index'
      get '/show/:id', to: 'cars#show'
      delete '/destroy/:id', to: 'cars#destroy'
    end
  end
  root 'pages#index'
  get '/*path' => 'pages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Cathes All Route
  # get '*path', to: 'pages#index', via: :all
end
