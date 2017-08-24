require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
	"Route"	
end

# songs not music
get '/music' do 
	"index - display a list of all the music"
end

get '/music/new' do
	"new - return an HTML form for creating a new song"
end

post '/music' do
	"create - create a new song"
end

get '/music/:id' do
	"show - display a specific song"
end

get '/music/:id/edit' do
	"edit - return an HTML form for editing a song"
end

put '/music/:id' do
	"update - update a specific song"
end

delete '/music/:id' do
	"destroy - delete a specific photo"
end
