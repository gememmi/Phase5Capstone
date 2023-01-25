class MoodRatingSerializer < ActiveModel::Serializer
  attributes :score, :id, :created_at, :date

  has_many :entries
  has_many :users, through: :entries
  
  def date
    object.created_at.in_time_zone("Eastern Time (US & Canada)").strftime('%b %d %Y, %I:%M %p')
end
end
