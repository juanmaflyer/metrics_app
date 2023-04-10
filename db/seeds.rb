# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Metric.create(name: "Nuclear Reactor Temp", description: "Temperature in Cº of Nuclear Reactor")
Metric.create(name: "Barcelona Temp", description: "Temperature in Cº of Barcelona City")
Metric.create(name: "Ants Count", description: "Counts the number of antes in the nest")