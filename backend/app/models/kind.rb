class Kind < ApplicationRecord
  # association
  has_many :moves, dependent: :destroy
end