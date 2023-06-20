class Car < ApplicationRecord
  include ImageUploader::Attachment(:image)
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :model, presence: true
  validates :price, presence: true
  validates :description, presence: true
  # Don't know if I have to addd this line or not
  validates :photo, presence: true
end
