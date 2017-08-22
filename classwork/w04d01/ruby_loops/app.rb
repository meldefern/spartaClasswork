# loop do 
# 	puts "ollie forever"
# end

i = 0

while i < 10 do
	puts "While: #{i}"
	i += 1
end

# while i < 10 {do something} end

j = 0

begin
	puts "Do while: #{j}"
	j += 1
end while j < 10

k = 0

until k > 10 do
	puts "Until: #{k}"
	k += 1
end

# 0...5 0 1 2 3 4
for i in 0..5
	puts "For loops: #{i}"
end

4.times do 
	puts "4 times"
end

(0..5).each do |i|
	puts "Each: #{i}"
end

names = ["divesh", "nazza", "kane", "joe", "rich", "melinda", "sab", "melson", "will", "ollie"]

names.each do |m|
	puts m
end

names.each { |name| puts name }



some_words = ["labyrinth", "dyslexia", "superman"]

new_words = some_words.map do |word|
	word.reverse
end

puts new_words

# some_words.map! do |word|
# 	word.reverse
# end

# puts some_words


some_numbers = [1,2,4,2,4,5,3,24,5,2,3,4]

sum = some_numbers.reduce do |total, number|
	total + number
end

puts sum



