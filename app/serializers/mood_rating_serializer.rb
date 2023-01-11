class MoodRatingSerializer < ActiveModel::Serializer
  attributes :score

  has_many :entries
  has_many :users, through: :entries
end
