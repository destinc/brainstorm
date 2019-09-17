# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ideas = Idea.create!(
  [
    {
      title: "New App",
      body: "Awesome App"
    },
    {
      title: "A twitter client idea",
      body: "Like twitter, but for food"
    },
    {
      title: "The Martian Falcon",
      body: "Space Detective novel"
    },
    {
      title: "Card game design",
      body: "Whist meets Pokemon"
    }
  ])
