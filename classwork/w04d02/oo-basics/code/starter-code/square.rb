class Square
	# access variables passed
	attr_accessor :length

	# initialize variable passed
	def initialize length
		self.length = length
	end

	def calculate_area
  		self.length ** 2
	end

	def calculate_perimeter
  		self.length * 4
	end

	def display
		puts "Area: #{calculate_area} Perimeter: #{calculate_perimeter}"
	end

	def scaled_area(factor)
		self.length *= factor
		calculate_area
	end

	def scaled_perimeter(factor)
		self.length *= factor
		calculate_perimeter
	end

	def display_scaled
		puts "Area: #{scaled_area(3)} Perimeter: #{scaled_perimeter(4)}"
	end
end