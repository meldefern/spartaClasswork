require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
	"Home"	
end
