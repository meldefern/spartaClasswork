Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:show]

  resources :posts

  root 'static#home'

  get 'users/:id/' => 'users#posts', :as => :user_posts

  match 'users/' => 'users#index', via: [:get, :post]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
