class AddColumnsToPerson < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :password, :string
    add_column :people, :email, :string
    add_column :people, :gender, :string
  end
end
