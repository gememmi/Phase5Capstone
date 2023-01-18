class MoodRatingSerializer < ActiveModel::Serializer
  attributes :score, :id, :created_at

  has_many :entries
  has_many :users, through: :entries
end
