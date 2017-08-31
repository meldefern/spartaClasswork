class ChangeAgeTypeInPeople < ActiveRecord::Migration[5.1]
  def change
  	change_column :people, :age, :integer, using: 'age::integer'
  end
end
