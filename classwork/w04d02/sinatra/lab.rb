require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
	"Book Homepage"
end

get '/books' do
	"INDEX"
end

get '/books/new' do
	"Create new book"
end

get '/books/1' do
	"Display a specific book"
end

put '/books/1' do
	"Update a book"
end

post '/books' do
	"Create a new book entry"
end

delete '/books/1' do
	"Delete a book"
end

get '/books/1/edit' do
	"Returns an html form to edit a book"
end
