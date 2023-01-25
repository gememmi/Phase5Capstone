class EntrySerializer < ActiveModel::Serializer
  attributes :title, :content, :id, :created_at, :date

  belongs_to :user
  belongs_to :mood_rating
  
  def date
    object.mood_rating.created_at.in_time_zone("Eastern Time (US & Canada)").strftime('%b %d %Y, %I:%M %p')
end
  
end
