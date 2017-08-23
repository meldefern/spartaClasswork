class AlbumsController < Sinatra::Base 

	$albums = [{
			id: 0,
			title: 'Album 1',
			release: 'date 01'
		},
		{
			id:1,
			title: 'Album 2',
			release: 'date 02'
		},
		{
			id:2,
			title: 'Album 3',
			release: 'date 03'
		}]

	# sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		"Homepage"
	end

	get '/new' do
		"NEW"
	end

	put '/' do
		"CREATE"
	end

	get '/:id' do
		"SHOW"
	end

	get '/:id/edit' do
		"EDIT"
	end

	post '/' do
		"UPDATE"
	end

	delete '/:id' do
		"DESTROY"
	end

end