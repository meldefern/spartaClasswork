class AlbumsController < Sinatra::Base 

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