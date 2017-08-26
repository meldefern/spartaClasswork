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

		# create an empty painting object
		@painting = Painting.new
		@painting.id = ""
		@painting.photo = ""
		@painting.description = ""
		@painting.day = ""

		erb :'paintings/new'

	end

	get '/:id' do

		# get the ID and turn it in to an integer
		id = params[:id].to_i

		# make a single painting object available in the template
		@painting = Painting.find id

		erb :'paintings/show'

	end

	post '/' do

		painting = Painting.new

		# bind the values
		painting.photo = params[:photo]
		painting.description = params[:description]
		painting.day = params[:day]

		# save the painting
		painting.save

		redirect '/'

	end

	put '/:id' do

		# data is gathered in the params object
		id = params[:id].to_i

		# load the object with the id
		painting = Painting.find id

		# update the values
		painting.photo = params[:photo]
		painting.description = params[:description]
		painting.day = params[:day]

		# save the painting
		painting.save

		# redirect the user to a GET route; INDEX
		redirect '/'

	end

	delete '/:id' do

		# get the ID
		id = params[:id].to_i

		# delete the post from the database
		Painting.destroy id

		# redirect back to the homepage
		redirect '/'

	end

	get '/:id/edit' do

		# get the ID and turn it into an integer
		id = params[:id].to_i

		# make a single post object available in the template
		@painting = Painting.find id

		erb :'paintings/edit'


	end

end