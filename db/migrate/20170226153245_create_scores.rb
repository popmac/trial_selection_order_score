class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      6.times do |i|
        t.integer :"q#{i + 1}"
      end
      t.timestamps
    end
  end
end
