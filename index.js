/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const person = {
  name: "Dawood",
  age: 25,
  city: "Rumaithiya",
  email: "Dawood.boland.kw@gmail.com",
};

function hasKey(object, key) {
  return object.hasOwnProperty(key);
}

console.log(hasKey(person, "name"));
console.log(hasKey(person, "family"));

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
	Q4) Create a function that accepts an array of objects called 'movies' 
and iterates through it to log the titles of all the movies.
********************************/
function hasMovies(objectArray) {
  objectArray.forEach((object) => {
    console.log("Task 4: ", object.title);
  });
}
hasMovies(movies);

/******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/

function hasMovies1(objectArray) {
  let counter = 0;
  objectArray.forEach((object) => {
    if (object.year == 1994) {
      counter++;
    }
  });
  return counter;
}

console.log("Task 5: ", hasMovies1(movies));
/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/

function hasMovies2(objectArray) {
  objectArray.forEach((object) => {
    if (object.title == "The Dark Knight") {
      object.genre = "Action/Drama";
    }
  });
  return objectArray;
}

console.log("Task 6: ", hasMovies2(movies));
