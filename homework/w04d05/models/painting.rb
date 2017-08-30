class Painting

	attr_accessor :id, :photo, :description, :day

	# Saves a new entry and inputs to database
	# Since it's static, and an instance has been created,
	# we need to use [instancename].connect rather than self
	def save

		conn = Painting.open_connection

		if(!self.id)
			# Insert a new record into the database
			sql = "INSERT INTO painting (photo, description, day) VALUES ('#{self.photo}', '#{self.description}', '#{self.day}') "
		else
			# Update an existing one
			sql = "UPDATE painting SET photo='#{self.photo}', description='#{self.description}', day='#{self.day}' WHERE id=#{self.id}"
		end

		conn.exec(sql)

	end

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

	def self.find_by_description desc

		conn = self.open_connection

		sql = "SELECT * FROM painting WHERE description LIKE '%#{desc}%' LIMIT 1"

		# PG always returns an array
		paintings = conn.exec(sql)

		# bind just the first and return
		painting = self.hydrate paintings[0]

		painting

	end

	def self.destroy id

		conn = self.open_connection

		sql = "DELETE FROM painting WHERE id='#{id}'"

		# handle delete here
		conn.exec(sql)
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