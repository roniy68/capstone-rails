require 'rails_helper'

RSpec.describe Car, type: :model do
  subject do
    myuser = User.create(username: 'Eddy')
    Car.create(name: 'Bugati',
               model: 'Cheron',
               description: 'A luxury car with impressive performance.',
               price: 250.5,
               photo: 'https://ik.imagekit.io/ahroniy/bugati.jpg?updatedAt=1686688638983', user_id: myuser.id)
  end

  it 'should be valid' do
    expect(subject).to be_valid
  end

  it 'Name should not be nil' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'car should have a description' do
    subject.description = nil
    expect(subject).to_not be_valid
  end

  it 'Price should me in decimals' do
    subject.price = 200.4
    expect(subject).to be_valid
  end

  it 'Price should not be nil' do
    subject.price = nil
    expect(subject).to_not be_valid
  end

  it 'car should have a photo' do
    subject.photo = nil
    expect(subject).to_not be_valid
  end

  it 'car should have a model' do
    subject.model = nil
    expect(subject).to_not be_valid
  end

  it 'car should have a user' do
    subject.user_id = nil
    expect(subject).to_not be_valid
  end

  it 'car should have a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end
end
