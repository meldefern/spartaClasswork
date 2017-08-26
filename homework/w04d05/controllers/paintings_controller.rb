class PaintingsController < Sinatra::Base

	# sets root as the parent-director of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :views, Proc.new { File.join(root, "views") }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do

		@title = "Gallery"

		@paintings = Painting.all

		erb :'paintings/index'

	end

	get '/new' do

		"NEW"

	end

	get '/:id' do

		# get the ID and turn it in to an integer
		id = params[:id].to_i

		# make a single painting object available in the template
		@painting = Painting.find id

		erb :'paintings/show'

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

		# get the ID and turn it into an integer
		id = params[:id].to_i

		# make a single post object available in the template
		@painting = Painting.find id

		erb :'paintings/edit'


	end

end