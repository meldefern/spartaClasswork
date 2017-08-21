def calculator
	puts "Which calculator do you want to use?"
	puts "(b)asic, (a)vanced, bm(i), (t)rip or (q)uit"
	choice = gets.chomp

	case choice
	when 'b'
		basic
	when 'a'
		advanced
	when 'i'
		bmi
	when 't'
		trip
	when 'q'
		return
	end
end

def basic
	puts "Enter your calculation on separate lines"
	num1  = gets.chomp.to_i
	op = gets.chomp
	num2 = gets.chomp.to_i

	case op
	when '+'
		puts num1 + num2
	when '-'
		puts num1 - num2
	when '*'
		puts num1 * num2
	when '/'
		puts num1 / num2
	end
		
end

def advanced
	puts "(s)quare root or (p)ower?"
	choice = gets.chomp

	case choice
	when 's'
		square_root
	when 'p'
		power
	end
end

def square_root
	puts "Square root of "
	num = gets.chomp.to_i

	puts Math.sqrt(num)
end

def power
	puts "x"
	base = gets.chomp.to_i
	puts "^n"
	n_power = gets.chomp.to_i

	puts base ** n_power
end

def bmi
	puts "im(p)erial or (m)etric"
	choice = gets.chomp

	case choice
	when 'p'
		imperial
	when 'm'
		metric
	end

end

def imperial
	puts "Enter your height in inches"
	height = gets.to_f
	puts "Enter your weight in lbs"
	weight = gets.to_f

	bmi_calc =  (weight / (height * height)) * 703

	display_bmi bmi_calc
end

def metric
	puts "Enter your height in cm"
	height = gets.to_f
	puts "Enter your weight in kg"
	weight = gets.to_f

	bmi_calc = (weight / (height * height)) * 100

	display_bmi bmi_calc
end

def display_bmi bmi
	puts "Your BMI is #{bmi}"
end

def trip
	puts "Enter the distance"
	distance = gets.chomp.to_f
	puts "Enter the fuel efficiency (mpg)"
	mpg = gets.chomp.to_f
	puts "Enter the cost per gallon"
	cost_p_g = gets.chomp.to_f
	puts "Enter the speed"
	speed = gets.chomp.to_f

	# for every 1mph over 60mph, reduce mpg by 2mpg
	if speed > 60
		value1 = speed - 60
		mpg -= (2*value1)
	end

	time = distance/speed
	cost = cost_p_g * mpg

	puts "Your trip will take #{time} hours, and cost #{cost}"



end

calculator






