require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './controllers/albums_controller.rb'

run AlbumsController