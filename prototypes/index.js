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
    // Filter for object that have the value of 'FE' in the 'program' key
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
    // Use the sort method to sort in place by the capacity property
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
    // Filter for elements whose genre property does not include horror or true crime. Then map for just the names.

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
    // For each element, create an object with title and year keys. Assign the respective values from the object to those keys.
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
    // Use the map method, and for each element, get the high and low, then average them.
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
    // Use filter to transform each element to the requested string, using the location and type properties.
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
    // Sort from highest to lowest humidity, then return the first element in the array

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
    // Create a new object with the requested keys. For each value, run a filter getting the visited for not visited parks. Chain on a map for .name to get just the name
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
    // Use map to transform each element into an object. Use bracket notation to dynamically set key names on the new object.
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
    // Create an empty array. Loop through data array, then through each activity. If the activity is not in the newly created array, push it in. Then return the newly created array.
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
    // Use .reduce to sum up all of the beers.length values
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
    // Map each element of the array to a new object literal using the requested key names and the respective values from the data object.
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
    // Create a new array that contains all of the beers. Then sort by abv. Return the first element.
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
    // For each element, create a new object literal with the requested key names. For Name, assign the name. for student count, use .find to find their cohort, then use the length property to find how many students are in it.
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
    // Use .reduce to creat an object whose keys are the instructor names. For each instructor, loop through the curriculum. If the instructor teaches the subject, and the subject is not already in their array, push the subject into the array.
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
    // Create a new array. Loopping through the curriculum lists and create a list of unique curriculums. Then iterate over that array using .reduce to create an object. Each key is equal to a different curriculum name, with an empty array. Then iterate through the instructors. If they teach the curriculum name, push the instructor's name into the array.
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
    // Iterate over the Object.values of the object using the .map method. Create a new object literal for each element. Assign key of bossName to the name. create a skidekickLoyalty key that iterates over the sidekicks, finds the once that correlate to the respective boss, then use .reduce to sum the loyalty scores of all the sidekicks.
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
    // Create a new array. Iterate over the stars. For each star, iterate over the values within each constellation object. If the constellation includes the star, push the star into the new array.
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
    // Create a new array. Iterate over the stars array, and create an array of all of the unique colors. Then use .reduce to create a new object whose keys are all of the unique colors. For the values, filter the stars array to only include elements whose color property corresponds to the key.
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
    constellations.splice(5, 0, constellations.splice(3, 1)[0])
    const result = constellations;
    return result;

    // Annotation:
    // Create a new array. Iterate over the stars, and create an array of constellations.
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
    // Iterate over the array and get an array of arrays of weapons using .map. Then use .map on the weapons elements, and within each weapons array, .map the element to the respective score within the weapons object. Then use .reduce to sum each of the character's weapon scores. then use .reduce again to sum all of the characters' scores.
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
    // Map over the characters array. For each character, create a new empty array. add a key of the character name to each new object. To each key, assign a value of another object, whose keys are damage and range. For each of those, use .reduce, iterating over the character's weapons. to add up all of the respective scores from the weapons array.
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
    // Use .reduce on the movies array to create an object whose keys are the title and value is the result of a filter method on the element's dinos array, returning the length of  only the awesome dinosaurs.
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
    // Create an array of the unique director names. Use reduce, iterating over the directors array, to create a new object. For each director, create an empty object. Iterating over each movie, if the movie's director equals the director element, create a key with the name of the title, and value is the average age of the cast. Determine the average age by using .reduce, iterating over the cast. For each iteration, add the difference between the release date at the actor's birth date. The divide by the length of the cast.
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
    // Iterate over the entries of the humans object. For each person, create a new object with keys of name, nationality and imdb star rating. Assign the respective values.
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
    // iterate over the human object's entries. Filter for the actors who appeared in at least one movie.
    //Map over the new array. For each person, create an object with the keys of name, and ages. Then iterate over the movies. if the cast includes the person, push their age into the ages array.
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
