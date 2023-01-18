class Entry < ApplicationRecord
    
    belongs_to :user
    belongs_to :mood_rating
    
end
