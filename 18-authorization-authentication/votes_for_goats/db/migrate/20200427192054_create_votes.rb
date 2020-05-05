class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :goat, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
