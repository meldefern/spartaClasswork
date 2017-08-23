require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './controllers/posts-controller.rb'

run PostsController