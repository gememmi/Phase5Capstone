class MoodRatingSerializer < ActiveModel::Serializer
  attributes :score, :id, :created_at, :date

  has_many :entries
  has_many :users, through: :entries

  def date
     object.created_at.strftime('%b %w %Y')
  end
end
