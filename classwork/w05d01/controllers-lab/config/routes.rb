Rails.application.routes.draw do

	# root 'static#home'

	# get '/books/new', to: 'books#new' 

	# get '/books/:id', to: 'books#show'

	# get '/books/:id/edit', to: 'books#edit'

	# post '/books', to: 'books#create'

	# put '/books/:id', to: 'books#update'

	# delete '/books/:id', to: 'books#destroy'

	resources :books

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
