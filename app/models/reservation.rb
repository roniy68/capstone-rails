class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :car_name, presence: true
  validates :car_model, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
end
