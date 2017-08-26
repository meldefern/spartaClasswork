class Painting

	attr_accessor :id, :photo, :description, :day

	def self.open_connection

		PG.connect(dbname: "gallery")

	end

	def self.all

		conn = self.open_connection

		sql = "SELECT id, photo, description, day FROM painting ORDER BY id"

		results = conn.exec(sql)

		# create an array of painting objects
		paintings = results.map do |result|
			self.hydrate result
		end

		paintings

	end

	def self.find id

		conn = self.open_connection

		sql = "SELECT * FROM painting WHERE id=#{id} LIMIT 1"

		# PG always returns an array
		paintings = conn.exec(sql)

		# bind just the first and return
		painting = self.hydrate paintings[0]

		painting

	end

	def self.hydrate painting_data

		painting = Painting.new

		painting.id = painting_data['id']
		painting.photo = painting_data['photo']
		painting.description = painting_data['description']
		painting.day = painting_data['day']

		painting

	end


end