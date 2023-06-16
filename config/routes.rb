Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cars', to: 'cars#index'
      post 'car/create', to: 'cars#create'
      get '/car/:id', to: 'cars#show'
      delete '/destroy/:id', to: 'cars#destroy'
    end
  end
  
  root 'pages#index'

  # Cathes All othr Routes
  get '*path', to: 'pages#index', via: :all
  # get '/*path' => 'pages#index'
end
