class UserSerializer < ActiveModel::Serializer
  attributes  :id, :username, :email, :avatar, :password_digest, :phone_num

  has_many :entries
  has_many :mood_ratings, through: :entries
  has_many :intentions
  
end
