class CreateObservations < ActiveRecord::Migration[7.0]
  def change
    create_table :observations do |t|
      t.references :metric, null: false, foreign_key: true
      t.float :value
      t.timestamp :timestamp
    end
  end
end
