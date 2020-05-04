class CreateGoats < ActiveRecord::Migration[6.0]
  def change
    create_table :goats do |t|
      t.string :name
      t.integer :age
      t.string :occupation
      t.boolean :living
      t.string :img_url

      t.timestamps
    end
  end
end
