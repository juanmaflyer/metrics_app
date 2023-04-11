class Observation < ApplicationRecord
  validates :value, presence: true
  validates :metric_id, presence: true

  belongs_to :metric
end
