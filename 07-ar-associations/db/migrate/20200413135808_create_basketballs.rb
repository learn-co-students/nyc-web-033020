class CreateBasketballs < ActiveRecord::Migration[6.0]
  def change
    create_table :basketballs do |t|
      t.string :brand
    end
  end
end
