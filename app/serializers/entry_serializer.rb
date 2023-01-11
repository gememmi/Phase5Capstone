class EntrySerializer < ActiveModel::Serializer
  attributes :title, :content

  belongs_to :user
  belongs_to :mood_rating
end
