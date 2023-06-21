RSpec.describe User, type: :model do
  subject do
    User.new(username: 'Peter')
  end

  it 'is valid' do
    expect(subject).to be_valid
  end

  it 'is not valid without a username' do
    subject.username = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid with a username less than 3 characters' do
    subject.username = 'Pe'
    expect(subject).to_not be_valid
  end

  it 'username should not be null' do
    subject.username = nil
    expect(subject).to_not be_valid
  end
end
