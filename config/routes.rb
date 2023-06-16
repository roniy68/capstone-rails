Rails.application.routes.draw do
  # Api Endpoints
  namespace :api do
    namespace :v1 do
      get 'cars', to: 'cars#index'
      post 'car/create', to: 'cars#create'
      get '/car/:id', to: 'cars#show'
      delete '/car/destroy/:id', to: 'cars#destroy'

      get 'reservations', to: 'reservations#index'
      post 'reservation/create', to: 'reservations#create'
      get '/reservation/:id', to: 'reservations#show'
      delete '/reservation/destroy/:id', to: 'reservations#destroy'
    end
  end

  get '*path', to: 'pages#index'

  # Root Page Route - Rails side
  root 'pages#index'

  # Cathes All othr Routes
  # get '*path', to: 'pages#index', via: :all
  # get '/*path' => 'pages#index'
end
