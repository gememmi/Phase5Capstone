class IntentionSerializer < ActiveModel::Serializer
  attributes :content

  belongs_to :user
end
