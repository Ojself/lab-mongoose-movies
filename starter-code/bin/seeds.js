const mongoose = require("mongoose");
const Movies = require("../models/movies");
const Celebrities = require("../models/celebrity");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

Movies.collection.drop();
Celebrities.collection.drop();

const movies = [
  {
    title: "Ironhack, the bootcamp from hell",
    genre: "Horror",
    plot:
      "Bootcamp goes horribly wrong when mongodb, express, node, passport and bcrypt gets introduced the same week"
  },
  {
    title: "El moscas de las araÃ±as",
    genre: "Horror",
    plot: "Moscas gigantes comen gente"
  },
  {
    title: "El hormigas de las araÃ±as",
    genre: "Horror",
    plot: "Hormigas gigantes comen gente"
  }
];

const celebrities = [
  {
    name: "Tasos",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Sylvie",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "R«±my",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Alina",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Eddy",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Julia",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Lukas",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Theresa",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Helleke",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Arian",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Fabio",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Antoni",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Andr«±",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Gary",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Jes«âs",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Nathan",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Aswin",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  },
  {
    name: "Hamza",
    occupation: "Web dev",
    catchPhrase: "This is my catchphrase"
  }
];

Movies.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});

Celebrities.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
