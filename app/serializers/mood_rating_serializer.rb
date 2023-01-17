class MoodRatingSerializer < ActiveModel::Serializer
  attributes :score, :id

  has_many :entries
  has_many :users, through: :entries
end
