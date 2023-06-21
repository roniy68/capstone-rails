class Car < ApplicationRecord
  belongs_to :user
  has_many :reservations, dependent: :destroy
  has_one_attached :image

  validates :name, presence: true
  validates :model, presence: true
  validates :price, presence: true
  validates :description, presence: true
  validates :photo, presence: true

  # def image_url
  #   self.image.attachment.url
  # end
end
