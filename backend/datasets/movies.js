const movies = [
    {
      movieName: "Inception",
      director: "Christopher Nolan",
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      Producer: "Emma Thomas",
      imdbRating: "8.8",
      yearOfRelease: "2010",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      poster: "https://link.to/inception-poster.jpg"
    },
    {
      movieName: "The Dark Knight",
      director: "Christopher Nolan",
      Actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      Producer: "Emma Thomas",
      imdbRating: "9.0",
      yearOfRelease: "2008",
      plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      poster: "https://link.to/dark-knight-poster.jpg"
    },
    {
      movieName: "Lady Bird",
      director: "Greta Gerwig",
      Actors: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts"],
      Producer: "Scott Rudin",
      imdbRating: "7.4",
      yearOfRelease: "2017",
      plot: "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
      poster: "https://link.to/lady-bird-poster.jpg"
    },
    {
      movieName: "Little Women",
      director: "Greta Gerwig",
      Actors: ["Saoirse Ronan", "Emma Watson", "Florence Pugh"],
      Producer: "Amy Pascal",
      imdbRating: "7.8",
      yearOfRelease: "2019",
      plot: "Jo March reflects back and forth on her life, telling the beloved story of the March sisters.",
      poster: "https://link.to/little-women-poster.jpg"
    },
    {
      movieName: "The Martian",
      director: "Ridley Scott",
      Actors: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
      Producer: "Simon Kinberg",
      imdbRating: "8.0",
      yearOfRelease: "2015",
      plot: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      poster: "https://link.to/martian-poster.jpg"
    },
    {
      movieName: "Django Unchained",
      director: "Quentin Tarantino",
      Actors: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
      Producer: "Stacey Sher",
      imdbRating: "8.4",
      yearOfRelease: "2012",
      plot: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      poster: "https://link.to/django-unchained-poster.jpg"
    },
    {
      movieName: "Harry Potter and the Sorcerer's Stone",
      director: "Chris Columbus",
      Actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
      Producer: "David Heyman",
      imdbRating: "7.6",
      yearOfRelease: "2001",
      plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
      poster: "https://link.to/harry-potter-poster.jpg"
    },
    {
      movieName: "Black Panther",
      director: "Ryan Coogler",
      Actors: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
      Producer: "Kevin Feige",
      imdbRating: "7.3",
      yearOfRelease: "2018",
      plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider.",
      poster: "https://link.to/black-panther-poster.jpg"
    },
    {
      movieName: "The Lego Movie",
      director: "Phil Lord & Christopher Miller",
      Actors: ["Chris Pratt", "Will Ferrell", "Elizabeth Banks"],
      Producer: "Dan Lin",
      imdbRating: "7.7",
      yearOfRelease: "2014",
      plot: "An ordinary LEGO construction worker, thought to be the prophesied 'Special', is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
      poster: "https://link.to/lego-movie-poster.jpg"
    },
    {
      movieName: "The Hunger Games",
      director: "Gary Ross",
      Actors: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
      Producer: "Nina Jacobson",
      imdbRating: "7.2",
      yearOfRelease: "2012",
      plot: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
      poster: "https://link.to/hunger-games-poster.jpg"
    },
    {
        "movieName": "The Prestige",
        "director": "Christopher Nolan",
        "Actors": ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"],
        "Producer": "Emma Thomas",
        "imdbRating": "8.5",
        "yearOfRelease": "2006",
        "plot": "Two stage magicians engage in a competitive rivalry with tragic results.",
        "poster": "https://link.to/the-prestige-poster.jpg"
      },
      {
        "movieName": "E.T. the Extra-Terrestrial",
        "director": "Steven Spielberg",
        "Actors": ["Henry Thomas", "Drew Barrymore", "Peter Coyote"],
        "Producer": "Kathleen Kennedy",
        "imdbRating": "7.9",
        "yearOfRelease": "1982",
        "plot": "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
        "poster": "https://link.to/et-poster.jpg"
      },
      {
        "movieName": "The Shape of Water",
        "director": "Guillermo del Toro",
        "Actors": ["Sally Hawkins", "Octavia Spencer", "Michael Shannon"],
        "Producer": "Guillermo del Toro",
        "imdbRating": "7.3",
        "yearOfRelease": "2017",
        "plot": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
        "poster": "https://link.to/shape-of-water-poster.jpg"
      },
      {
        "movieName": "Jurassic Park",
        "director": "Steven Spielberg",
        "Actors": ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        "Producer": "Kathleen Kennedy",
        "imdbRating": "8.1",
        "yearOfRelease": "1993",
        "plot": "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "poster": "https://link.to/jurassic-park-poster.jpg"
      },
      {
        "movieName": "The Departed",
        "director": "Martin Scorsese",
        "Actors": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
        "Producer": "Brad Pitt",
        "imdbRating": "8.5",
        "yearOfRelease": "2006",
        "plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "poster": "https://link.to/the-departed-poster.jpg"
      },
      {
        "movieName": "La La Land",
        "director": "Damien Chazelle",
        "Actors": ["Ryan Gosling", "Emma Stone", "John Legend"],
        "Producer": "Fred Berger",
        "imdbRating": "8.0",
        "yearOfRelease": "2016",
        "plot": "A jazz musician and an aspiring actress fall in love while attempting to reconcile their aspirations for the future.",
        "poster": "https://link.to/la-la-land-poster.jpg"
      },
      {
        "movieName": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "Actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "Producer": "Lawrence Bender",
        "imdbRating": "8.9",
        "yearOfRelease": "1994",
        "plot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster": "https://link.to/pulp-fiction-poster.jpg"
      },
      {
        "movieName": "The Grand Budapest Hotel",
        "director": "Wes Anderson",
        "Actors": ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
        "Producer": "Scott Rudin",
        "imdbRating": "8.1",
        "yearOfRelease": "2014",
        "plot": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        "poster": "https://link.to/grand-budapest-hotel-poster.jpg"
      },
      {
        "movieName": "Moonlight",
        "director": "Barry Jenkins",
        "Actors": ["Trevante Rhodes", "André Holland", "Mahershala Ali"],
        "Producer": "Adele Romanski",
        "imdbRating": "7.4",
        "yearOfRelease": "2016",
        "plot": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        "poster": "https://link.to/moonlight-poster.jpg"
      },
      {
        "movieName": "Birdman",
        "director": "Alejandro González Iñárritu",
        "Actors": ["Michael Keaton", "Zach Galifianakis", "Edward Norton"],
        "Producer": "John Lesher",
        "imdbRating": "7.7",
        "yearOfRelease": "2014",
        "plot": "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
        "poster": "https://link.to/birdman-poster.jpg"
      }
  ];
  
  module.exports = movies;
  