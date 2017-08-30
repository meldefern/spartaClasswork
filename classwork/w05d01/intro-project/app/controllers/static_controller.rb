class StaticController < ApplicationController
	def home
		# render :home
	end

	def hello
		@name = params[:name]
		# render plain: "Hello, #{name}"

		respond_to do |format|
			format.json do
				render json: { message: "Hello, #{@name}" }
			end
		end
	end

	def contact
		# render :contact
	end
end