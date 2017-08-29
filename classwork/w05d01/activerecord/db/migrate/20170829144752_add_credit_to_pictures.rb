class AddCreditToPictures < ActiveRecord::Migration[5.1]
  def change
    add_column :pictures, :artist, :string
  end
end
