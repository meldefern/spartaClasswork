class AlbumsController < Sinatra::Base 

	$albums = [{
			id: 0,
			title: 'Album 1',
			release: '2017-01-01',
			review: 'This is a review for Album 1'
		},
		{
			id:1,
			title: 'Album 2',
			release: '2017-01-02',
			review: 'This is a review for Album 2'
		},
		{
			id:2,
			title: 'Album 3',
			release: '2017-01-03',
			review: 'This is a review for Album 3'
		}]

	# sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		
		@title = "Album Reviews"

		@albums = $albums

		erb :'albums/index'

	end

	get '/new' do

		@title = "Album Reviews"

		erb :'albums/new'

	end

	put '/' do

		"UPDATE"

	end

	get '/:id' do

		@title = "Album Reviews"

		id = params[:id].to_i

		@album = $albums[id]

		erb :'albums/show'

	end

	get '/:id/edit' do

		@title = "Album Reviews"

		erb :'albums/edit'

	end

	post '/' do
		
		id = $albums.length

		new_album = {
			id: id,
			title: params[:title],
			release: params[:release],
			review: params[:review]
		}

		$albums.push new_album

		redirect "/"

	end

	delete '/:id' do

		"DESTROY"

	end

end