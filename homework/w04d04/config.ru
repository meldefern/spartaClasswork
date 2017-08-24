require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './controllers/paintings_controller.rb'

use Rack::Reloader

use Rack::MethodOverride

run PaintingsController