FactoryBot.define do
  factory :car do
    name { 'Toyota Prius' }
    description { 'Qui laborum mollitia exercitationem.' }
    model { '2017' }
    photo { 'http://sporer-wehner.example/twanna_deckow' }
    price { 6701.0 }
    association :user, factory: :user
  end
end
