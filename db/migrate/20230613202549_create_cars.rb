class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.text :description
      t.string :photo
      t.decimal :price
      t.text :model
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
