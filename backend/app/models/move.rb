class Move < ApplicationRecord
  # association
  belongs_to :kind

  # validation
  validates :power, :mp, numericality: { greater_than_or_equal_to: 0 }
end