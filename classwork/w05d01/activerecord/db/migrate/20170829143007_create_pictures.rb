class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.text :name
      t.text :description
      t.text :url

      t.timestamps
    end
  end
end