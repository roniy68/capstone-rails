Rails.application.routes.draw do
  root 'pages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # Cathes All Route
  get '*path', to: 'pages#index', via: :all
end
