# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create Users
admin = User.create(username: 'ahroniy')

# Create Cars
Reservation.create!(
  car_name: 'Car 1',
  car_model: 'Model 1',
  start_date: Date.today + 1,
  end_date: Date.today + 7,
  user: admin,
  car_id: 1,
  user_id: 1
)

Reservation.create!(
  car_name: 'Car 2',
  car_model: 'Model 2',
  start_date: Date.today + 2,
  end_date: Date.today + 8,
  user: admin,
  car_id: 2,
  user_id: 1 
)
