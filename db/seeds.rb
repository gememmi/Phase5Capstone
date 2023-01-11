# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


avatars = ["cloud", "sun", "thunder", "rainbow", "moon"]

good_titles = [
    "things will get better!",
    "no one can stop me today!",
    "lonely day",
    "on top of the world",
    "grateful",
    "proud of myself",
    ";)"
]

bad_titles = [
    "crappy day",
    "spiraling :/",
    "missing her",
    "feeling stuck",
    "didn't sleep well last night"
]

# seperate my mood seeds into bad and good arrays
# create a 50.times for good entries and then make sure they have a mood rating score or 3-5
# create a 50.times for bad entries and then make sure they have a mood rating score of 1-2
# 


intContent = [
    "I will go with the flow",
    "Today, I will not procrastinate on my work",
    "Today I will try to go to sleep early",
    "Today I will go to the gym for 30 minutes",
    "Today I will speak kindly to myself",
    "I will learn something new today",
    "I will drink three glass of water today",
    "I will take deep breaths each time I feel stress",
    "I will get my work done before I play video games",
    "I will call my dad today",
    "Today, I will feed myself three well-rounded meals",
    "Today I will finish the rest of the Canvas modules",
    "I will not spend more than 2 hours on Instagram today", 
    "I will bring my lunch from home today",
    "I will practice meditation",
    "I will sit down and plan out my week ahead","I will assume the best of others today",
    "I will go to bed before 11 pm today",
    "I will go on a walk outside",
    "I will apply to one job",
    "I will spend at least 30 minutes on my hobby",
    "I will empty my inbox to zero", 
    "I will abstain from alcohol today",
    "I will practice a new language for at least 30 minutes today",
    "I will smile at a stranger today",
    "I will be kind today",
    "I intend to be a great partner and friend today",
    "I will try my best today",
    "I will practice yoga for at least 20 minutes today",
    "I will get up at 6:30 am today",
    "I will spend time with my cat today"
  ]

  
10.times do
    User.create(
        username: Faker::Internet.unique.username,
        email: Faker::Internet.unique.email ,
        password_digest: Faker::Internet.unique.password ,
        phone_num: Faker::PhoneNumber.cell_phone,
        avatar: avatars[rand(avatars.length)] 
    )

    # 100.times do 
    #     Entry.create(
    #         title: entry_titles[rand(entry_titles.length)],
    #         content:Faker::Lorem.unique.paragraph(sentence_count: 3) ,
    #         user_id:Faker::Number.between(from: 1, to: 10) ,
    #         mood_rating_id: Faker::Number.between(from: 1, to: 100),
    #     )
    # end 

    50.times do
        Entry.create(
            title: good_titles[rand(good_titles.length)],
            content:Faker::Lorem.unique.paragraph(sentence_count: 3) ,
            user_id:Faker::Number.between(from: 1, to: 10) ,
            mood_rating_id: Faker::Number.between(from: 1, to: 100),
        ) 
    end

    50.times do
        Entry.create(
            title: bad_titles[rand(bad_titles.length)],
            content:Faker::Lorem.unique.paragraph(sentence_count: 3) ,
            user_id:Faker::Number.between(from: 1, to: 10) ,
            mood_rating_id: Faker::Number.between(from: 1, to: 100),
        ) 
    end

    

    100.times do
        MoodRating.create(
            score: Faker::Number.between(from: 1, to: 5)
        ) 
    end

    10.times do 
        Intention.create(
            content:intContent[rand(intContent.length)],
            user_id:Faker::Number.between(from: 1, to: 10)
        )
    end



end