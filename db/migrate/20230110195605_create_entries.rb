class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :content
      t.integer :user_id
      t.integer :mood_rating_id

      t.timestamps
    end
  end
end
