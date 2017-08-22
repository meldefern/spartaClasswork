require_relative "square.rb"

square = Square.new(5)

puts square.calculate_area
puts square.calculate_perimeter
puts square.display
puts square.scaled_area(5)
puts square.scaled_perimeter(3)
puts square.display_scaled


# area = calculate_area side_length
# perimeter = calculate_perimeter side_length

# puts "Area: #{area} Perimeter: #{perimeter}"

# # scale the square by a factor of 10
# side_length *= 10

# scaled_area = calculate_area side_length
# scaled_perimeter = calculate_perimeter side_length

# puts "Area: #{scaled_area} Perimeter: #{scaled_perimeter}"

