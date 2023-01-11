class User < ApplicationRecord
    has_secure_password 

    has_many :intentions
    has_many :entries
    has_many :mood_ratings, through: :entries

end
