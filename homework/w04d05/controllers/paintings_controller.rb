class PaintingsController < Sinatra::Base

	# sets root as the parent-director of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :views, Proc.new { File.join(root, "views") }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do

		"INDEX"

	end

	get '/new' do

		"NEW"

	end

	get '/:id' do

		"SHOW"

	end

	post '/' do

		"CREATE"

	end

	put '/:id' do

		"UPDATE"

	end

	delete '/:id' do

		"DELETE"

	end

	get '/:id/edit' do

		"EDIT"

	end

end