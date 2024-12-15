Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :health_check, only: [:index]

  resources :monsters, only: [:index, :create, :update]

  # Defines the root path route ("/")
  # root "posts#index"
end
