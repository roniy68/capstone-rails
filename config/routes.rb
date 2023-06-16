Rails.application.routes.draw do
  # Api Endpoints
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index show create update destroy]
      resources :cars, only: %i[index create show destroy]
      resources :reservations, only: %i[index create show destroy]
    end
  end

  get '*path', to: 'pages#index'

  # Root Page Route - Rails side
  root 'pages#index'
end
