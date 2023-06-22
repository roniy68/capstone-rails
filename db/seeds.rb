# Constants
# car1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images','murple_logo.png')), filename: 'murple_logo.png')
# IMAGE = Rails.root.join('app', 'assets', 'images', 'murple_logo.png')
# Create Users
admin1 = User.create(username: 'ahroniyA')
admin2 = User.create(username: 'salwaB')
admin3 = User.create(username: 'talhaM')

# Create Cars
car1 = admin1.cars.create(
  name: 'Bugati',
  model: 'Cheron',
  description: 'A luxury car with impressive performance.',
  price: 250.5,
  photo: 'https://ik.imagekit.io/ahroniy/bugati.jpg?updatedAt=1686688638983'
)
# car1.image.attach(io: File.open(IMAGE), filename: 'murple_logo.png')

car2 = admin2.cars.create(
  name: 'Mercedes',
  model: 'benz',
  description: 'A luxury car with impressive performance.',
  price: 250.5,
  photo: 'https://ik.imagekit.io/ahroniy/mercedies.jpg?updatedAt=1686688717606'
)
# car2.image.attach(io: File.open(IMAGE), filename: 'murple_logo.png')

car3 = admin2.cars.create(
  name: 'Suzuki',
  model: 'Swift',
  description: 'A luxury car with impressive performance.',
  price: 250.5,
  photo: 'https://paultan.org/image/2021/04/Suzuki_Swift_Sport_ZC33s_Malaysia_Ext-1.jpg'
)

# Create Reservations
Reservation.create!(
  car_name: 'Car 1',
  car_model: 'Model 1',
  start_date: Date.today + 1,
  end_date: Date.today + 7,
  user_id: admin1.id,
  car_id: car1.id
)

Reservation.create!(
  car_name: 'Car 2',
  car_model: 'Model 2',
  start_date: Date.today + 2,
  end_date: Date.today + 8,
  user_id: admin2.id,
  car_id: car2.id
)

Reservation.create!(
  car_name: 'Car 3',
  car_model: 'Model 3',
  start_date: Date.today + 2,
  end_date: Date.today + 8,
  user_id: admin3.id,
  car_id: car3.id
)

admin2.cars.create(
  name: 'PhotoTest',
  model: 'benz',
  description: 'A luxury car with impressive performance.',
  price: 250.5,
  photo: 'https://ik.imagekit.io/ahroniy/mercedies.jpg?updatedAt=1686688717606',
)

Car.create(
  name: 'PhotoTest',
  model: 'benz',
  description: 'A luxury car with impressive performance.',
  price: 250.5,
  photo: 'https://ik.imagekit.io/ahroniy/mercedies.jpg?updatedAt=1686688717606',
)
