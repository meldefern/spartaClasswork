class Person < ApplicationRecord
	validates :name, format: { with: /\A[a-zA-Z]+\z/,
	message: "only allows letters" }

	validates :name, inclusion: { in: %w(rich ollie steve),
		message: "%{value} is not rich ollie or steve"
	}

	validates :age, numericality: true

	# validates :password, confirmation: true


end
