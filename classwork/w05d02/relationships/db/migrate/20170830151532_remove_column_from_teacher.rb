class RemoveColumnFromTeacher < ActiveRecord::Migration[5.1]
  def change
    remove_column :teachers, :student_id, :integer
  end
end
