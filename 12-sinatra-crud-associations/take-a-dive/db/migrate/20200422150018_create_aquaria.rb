class CreateAquaria < ActiveRecord::Migration
  def change
    create_table :aquaria do |t|
      t.string :name
      t.string :city
      t.string :img_url
    end 
  end
end
