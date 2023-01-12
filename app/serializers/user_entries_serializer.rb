class UserEntriesSerializer < ActiveModel::Serializer
  attributes :username

  has_many :entries
end
