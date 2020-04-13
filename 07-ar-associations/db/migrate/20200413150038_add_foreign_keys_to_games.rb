class AddForeignKeysToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :basketball_id, :integer
    add_column :games, :player_id, :integer
  end
end
