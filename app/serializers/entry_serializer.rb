class EntrySerializer < ActiveModel::Serializer
  attributes :title, :content, :id

  belongs_to :user
  belongs_to :mood_rating
  
end
