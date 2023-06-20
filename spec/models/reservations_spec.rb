require 'rails_helper'

RSpec.describe Reservation, type: :model do
  subject do
    myuser = User.create(username: 'Eddy')
    mycar = Car.create(name: 'toyota', model: '2017', description: 'the best car in the city', price: 200.7,
                       photo: 'https://paultan.org/image/2021/04/Suzuki_Swift_Sport_ZC33s_Malaysia_Ext-1.jpg', user_id: myuser.id)
    Reservation.create(
      car_name: 'Car 1',
      car_model: 'Model 1',
      start_date: Date.today + 1,
      end_date: Date.today + 7,
      car_id: mycar.id,
      user_id: myuser.id
    )
  end
  before { subject.save }

  describe 'validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end

    it 'car_name should not be nil' do
      subject.car_name = nil
      expect(subject).to_not be_valid
    end

    it 'car_model should not be nil' do
      subject.car_model = nil
      expect(subject).to_not be_valid
    end

    it 'start_date should not be nil' do
      subject.start_date = nil
      expect(subject).to_not be_valid
    end

    it 'end_date should not be nil' do
      subject.end_date = nil
      expect(subject).to_not be_valid
    end
  end

  describe 'associations' do
    it 'belongs to a user' do
      expect(subject.user).to be_instance_of(User)
    end

    it 'should have city name' do
      expect(subject.car).to be_instance_of(Car)
    end
  end
end
