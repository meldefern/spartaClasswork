class PaintingsController < Sinatra::Base

	# sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	# sets the view directory correctly
	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do

		"route"

	end

	get '/new' do

		"update"

	end

	get '/:id' do

		"show"

	end

	post '/' do

		"create"

	end

	put '/:id' do

		"update"

	end

	delete '/:id' do

		"delete"

	end

	get '/:id/edit' do

		"edit"

	end
end