class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :product_description, null: false
      t.string :product_price, null: false
      t.string :product_category, null: false
      t.integer :product_quantity, null: false
      t.integer :review_id
      t.timestamps
    end
  end
end
