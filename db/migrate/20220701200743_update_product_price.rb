class UpdateProductPrice < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :product_price, :decimal, precision: 10, scale: 2, null: false
  end
end
