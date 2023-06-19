class User < ApplicationRecord
  has_many :cars, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
end
