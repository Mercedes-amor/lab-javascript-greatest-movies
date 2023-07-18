// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    console.log(moviesArray);

    let allDirectors
    allDirectors = moviesArray.map(element => {
        return element.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let contador = 0

    moviesArray.filter((eachMovie) => {
    

    if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")) {
        contador++
        return true
   } else {
        return false
   }
})
    return contador   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0}
    
    let total =moviesArray.reduce ((acc, eachElement) => {
        if (eachElement.score !== undefined) {
        return acc + eachElement.score
    } else { return acc}
    },0)

    let avg = total / moviesArray.length
    let twoDigit = avg.toFixed(2)
    let twoDigitNum = parseFloat(twoDigit)
    return twoDigitNum

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let filteredDrama = moviesArray.filter((eachMovie) => {
    
        if (eachMovie.genre.includes("Drama")) {
            
            return true
       } else {
            return false
       }
    })
        return scoresAverage(filteredDrama)
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let cloneMoviesArray= JSON.parse (JSON.stringify(moviesArray))
    
    
    cloneMoviesArray.sort ((a, b) =>{
   
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else if (a.year === b.year) 
       { return b.title.localeCompare (a.title.localeCompare)
        }
    
    })
    return cloneMoviesArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    let cloneMoviesArray= JSON.parse (JSON.stringify(moviesArray))
    
    
    cloneMoviesArray.sort ((a, b) =>{
   
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        }     
    })

    let titleArray = cloneMoviesArray.map ((eachElement) => {
        return eachElement.title;
    })

    return titleArray.slice(0,20) 

}

console.log (titleArray)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}