require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
	"Route"	
end

get '/music' do
	"index - display a list of all the music"
end
