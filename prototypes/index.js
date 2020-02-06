const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(el => el.color === 'orange').map(el => el.name)
    return result;

    // Annotation:
    // Filter the kitties for the color orange, then map over the array with their names only.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age)
    return result;

    // Annotation:
    // Sort the kitties by age using sort function with a callback comparing ages.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    kitties.forEach(el => el.age += 2)
    return kitties;

    // Annotation:
    // Iterate over the array and change the age.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    var people = []
    clubs.forEach(club => {
      club.members.forEach(person => {
        if (people.indexOf(person) === -1) {
          people.push(person)
        }
      })
    })
    var peopleObj = {};
    people.forEach(person => {
      peopleObj[person] = [];
    })

    people.forEach(person => {
      clubs.forEach(club => {
        if (club.members.includes(person)) {
          peopleObj[person].push(club.club)
        }
      })
    })

    const result = peopleObj;
    return result;

    // Annotation:
    // Create an array of unique people
    // Create an empty objects with a key for each person.
    // If the person is in a club, add the values

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    var newObj = mods.map(el => {
      return {
        mod: el.mod,
        studentsPerInstructor: el.students / el.instructors
      }
    })

    const result = newObj;
    return result;

    // Annotation:
    // Map over the array and create keys and values for each mod
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    var myResult = cakes.map(el => {
      return {
        "flavor": el.cakeFlavor,
        "inStock": el.inStock
      }
    })
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = myResult
    return result;

    // Annotation:
    // Map over the array and create an object for each element. Use the properties in the original array of objects to create the values.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    var myResult = cakes.filter(el => el.inStock > 0)



    const result = myResult;
    return result;

    // Annotation:
    // Filter the array for cakes that have nothing in stock.
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    var total = cakes.reduce((acc, el) => {
        acc += el.inStock;
        return acc;
    }, 0)

    const result = total;
    return result;

    // Annotation:
    // Reduce all the inStock values to a total number.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    var toppings = [];
    cakes.forEach(el => {
      el.toppings.forEach(topping => {
        if (toppings.indexOf(topping) === -1) {
          toppings.push(topping)
        }
      })
    })

    const result = toppings
    return result;


    // Annotation:
    // Create a new array
    // Create a unique list of toppings
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    var toppings = [];
    cakes.forEach(el => {
      el.toppings.forEach(topping => {
        if (toppings.indexOf(topping) === -1) {
          toppings.push(topping)
        }
      })
    })

    var allToppings = [];
    cakes.forEach(el => {
      allToppings = allToppings.concat(el.toppings)
    })

    var myResult = toppings.reduce((acc, el1) => {
      acc[el1] = allToppings.filter(el2 => el2 === el1).length;
      return acc;
    }, {})

    const result = myResult;
    return result;

    // Annotation:
    // Create a unique list of allToppings
    // Concatenate all of the element's toppings into a list of all toppings, including duplicates
    // Reduce the unique toppings list into an object that has the topping name as the key and the number of total toppings as the length
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    var myResult = classrooms.filter(el => el.program === 'FE')
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
      var myResult = {
        feCapacity: classrooms.filter(el => el.program === 'FE').reduce((acc, el) => {
        acc += el.capacity;
        return acc;
      }, 0),
        beCapacity: classrooms.filter(el => el.program === 'BE').reduce((acc, el) => {
        acc += el.capacity;
        return acc;
      }, 0)

    }
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    })

    const result = classrooms;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    var myResult = books.filter(el => el.genre !== 'Horror' && el.genre !== 'True Crime').map(el => el.title)

    const result = myResult
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    var myResult = books.filter(el => el.published >= 1990).map(el => {
      return {
        title: el.title,
        year: el.published
      }
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    var myResult = weather.map(el => {
      var average = (el.temperature.high + el.temperature.low) / 2;
      return average;
    })
    const result = myResult
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    var myResult = weather.filter(el => el.type.includes('sunny')).map(el => el.location + ' is ' + el.type + '.')

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {

    var myResult = weather.sort((a, b) => b.humidity - a.humidity)[0]
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    var myResult = {
      parksToVisit: nationalParks.filter(el => !el.visited).map(el => el.name),
      parksVisited: nationalParks.filter(el => el.visited).map(el => el.name)
    }
    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    myResult = nationalParks.map(el => {
      var newObj = {};
      newObj[el.location] = el.name
      return newObj
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    var activitiesList = [];
    nationalParks.forEach(el => {
      el.activities.forEach(activity => {
        if (activitiesList.indexOf(activity) === -1) {
          activitiesList.push(activity)
        }
      })
    })

    const result = activitiesList;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    var myResult = breweries.reduce((acc, el) => {
      acc += el.beers.length;
      return acc;
    }, 0)

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]
    var myResult = breweries.map(el => {
      return {
        name: el.name,
        beerCount: el.beers.length
      }
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    var allBeers = [];
    breweries.forEach(el => {
      allBeers = allBeers.concat(el.beers)
    })

    var myResult = allBeers.sort((a, b) => b.abv - a.abv)[0]

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    var myResult = instructors.map(instructor => {
      return {
        name: instructor.name,
        studentCount: cohorts.find(cohort => cohort.module === instructor.module).studentCount
      }
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    var myResult = cohorts.reduce((acc, cohort) => {
       acc['cohort' + cohort.cohort] = cohort.studentCount / instructors.filter(instructor => instructor.module === cohort.module).length;
       return acc;
    }, {})

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    var myResult = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      cohorts.forEach(el => {
        el.curriculum.forEach(curriculum => {
          if (instructor.teaches.includes(curriculum) && acc[instructor.name].indexOf(el.module) === -1) {
            acc[instructor.name].push(el.module)
          }
        })
      })
      return acc;
    }, {})

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    var curriculums = [];
    cohorts.forEach(cohort => {
      cohort.curriculum.forEach(curriculum => {
        if (curriculums.indexOf(curriculum) === -1) {
          curriculums.push(curriculum)
        }
      })
    })

    var myResult = curriculums.reduce((acc, el) => {
      acc[el] = [];
      instructors.forEach(instructor => {
        if (instructor.teaches.indexOf(el) !== -1) {
          acc[el].push(instructor.name)
        }
      })
      return acc
    }, {})

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    var myResult = Object.values(bosses).map(el => {
      return {
        bossName: el.name,
        sidekickLoyalty: sidekicks.filter(el2 => el2.boss === el.name).reduce((acc, el3) =>  {
          acc += el3.loyaltyToBoss;
          return acc;
        }, 0)
      }
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    var myStars = [];
    stars.forEach(star => {
      Object.values(constellations).forEach(constellation => {
        if (constellation.stars.includes(star.name)) {
          myStars.push(star)
        }
      })
    })


    const result = myStars;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    var colors = [];
    stars.forEach(star => {
      if (colors.indexOf(star.color) === -1) {
        colors.push(star.color)
      }
    })
    var myResult = colors.reduce((acc, color) => {
      acc[color] = stars.filter(star => star.color === color);
      return acc;
    }, {})

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    var constellations = []

    stars.forEach(star => {
      if (star.constellation !== '') {
        constellations.push(star.constellation)
      }
    })
    constellations.splice(5, 0, ...constellations.splice(3, 1))
    const result = constellations;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    var myResult = characters.map(character => {
      return character.weapons
    })

    var myResult2 = myResult.map(result => {
      return result.map(weapon => {
        return weapons[weapon].damage
      })
    })

    myResult3 = myResult2.map(character => {
      return character.reduce((a, b) => a + b)
    }).reduce((a, b) => a + b)


    const result = myResult3;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    var myResult = characters.map(character => {
      var obj = {}
      obj[character.name] = {
        damage: character.weapons.reduce((acc, el) => {
          acc += weapons[el].damage
          return acc;
        }, 0),
        range: character.weapons.reduce((acc, el) => {
          acc += weapons[el].range
          return acc;
        }, 0)
      }
      return obj;
    })

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    var myResult = movies.reduce((acc, el) => {
      acc[el.title] = el.dinos.filter(dino => {
        return dinosaurs[dino].isAwesome
      }).length
      return acc;
    }, {});

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
    var directors = [];
    movies.forEach(movie => {
      if (directors.indexOf(movie.director) === -1) {
        directors.push(movie.director)
      }
    })

    var myResult = directors.reduce((acc, director) => {
        var obj = {};
        movies.forEach(movie => {
          if (movie.director === director) {
            obj[movie.title] = Math.floor(movie.cast.reduce((acc, actor) => {
              acc += (movie.yearReleased - humans[actor].yearBorn);
              return acc;
            }, 0) / movie.cast.length);
          }
        })
        acc[director] = obj;
        return acc;
    }, {})


    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    var peeps = Object.entries(humans).map(person => {
      return {
        name: person[0],
        nationality: person[1].nationality,
        imdbStarMeterRating: person[1].imdbStarMeterRating
      }
    })

    var myResult = peeps.filter(peep => {
      return movies.every(movie => movie.cast.every(person => person !== peep.name))
    })

    myResult.splice(0, 0, ...myResult.splice(2, 2))

    const result = myResult;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    var myResult = Object.entries(humans).filter(peep => {
      // console.log(peep[0])
      return movies.some(movie => movie.cast.some(person => person === peep[0]))
    })

    myResult2 = myResult.map(person => {
      var personObj = {
        name: person[0],
        ages: []
      }
      movies.forEach(movie => {
        if (movie.cast.includes(person[0])) {
          personObj.ages.push(movie.yearReleased - person[1].yearBorn);
        }
      })
      return personObj;
    })


    const result = myResult2;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
