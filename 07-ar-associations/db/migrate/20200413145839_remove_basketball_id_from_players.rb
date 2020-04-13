class RemoveBasketballIdFromPlayers < ActiveRecord::Migration[6.0]
  def change
    remove_column :players, :basketball_id
  end
end
