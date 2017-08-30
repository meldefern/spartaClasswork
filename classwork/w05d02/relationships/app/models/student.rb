class Student < ApplicationRecord
	has_one :teacher, dependent: :destroy
end
