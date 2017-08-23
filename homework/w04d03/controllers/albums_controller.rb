class AlbumsController < Sinatra::Base 

	$albums = [{
			id: 0,
			title: 'Lana Del Rey - \'Lust for Life',
			release: '2017-07-21',
			cover: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/LANA_DEL_REY_LUST_FOR_LIFE_1000-300x300.jpeg',
			review: '4/5 Stars'
		},
		{
			id:1,
			title: 'Arcade Fire - \'Everything Now',
			release: '2015-07-28',
			cover: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/Arcade-Fire-Everything-Now-Cover_106286491_209146992-300x300.jpg',
			review: '5/5 Stars'
		},
		{
			id:2,
			title: 'Dizzee Rascal - \'Raskit',
			release: '2017-07-21',
			cover: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/Dizzee-Rascal-Raskit-art_107629392_208154771-300x300.jpg',
			review: '4/5 Stars'
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
			cover: params[:cover],
			review: params[:review]
		}

		$albums.push new_album

		redirect "/"

	end

	delete '/:id' do

		"DESTROY"

	end

end