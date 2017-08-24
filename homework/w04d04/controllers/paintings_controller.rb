class PaintingsController < Sinatra::Base

	$paintings = [{
		id: 0,
		title: 'Painting 1',
		image: 'url'
	},
	{
		id: 1,
		title: 'Painting 2',
		image: 'url'
	},
	{
		id: 2,
		title: 'Painting 3',
		image: 'url'
	}]

	# sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do

		@title = "Gallery"

		@paintings = $paintings

		erb :'paintings/index'

	end

	get '/new' do

		@painting = {
			id: "",
			title: "",
			content: "",
		}

		erb :'paintings/new'

	end

	get '/:id' do

		id = params[:id].to_i

		@painting = $paintings[id]

		erb :'paintings/show'

	end

	post '/' do

		id = $paintings.length

		new_post = {
			id: id,
			title: params[:title],
			image: params[:image]
		}

		$paintings.push new_post

		redirect '/'

	end

	put '/:id' do

		id = params[:id].to_i

		painting = $paintings[id]

		painting[:title] = params[:title]
		painting[:image] = params[:image]

		$paintings[id] = painting

		redirect '/'

	end

	delete '/:id' do

		id = params[:id].to_i

		$paintings.delete_at(id)

		redirect '/'
		
	end

	get '/:id/edit' do

		id = params[:id].to_i

		@painting = $paintings[id]

		erb :'paintings/edit'

	end
end