class CreateLaptops < ActiveRecord::Migration[5.1]
  def change
    create_table :laptops do |t|
      t.string :model

      t.timestamps
    end
  end
end
