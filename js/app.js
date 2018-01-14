// terrible varialbe names. 
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();

function reqListener() {
  // console.log('XMLersp', this.responseText);
  let obj = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerHTML = obj.name;

  // you have to do this second request inside the first function cause you have to always go get the infomartion first. first this one that is.
  let oReq2 = new XMLHttpRequest();
  oReq2.addEventListener("load", reqListenerTwo);
  oReq2.open("GET", obj.homeworld);
  // obj.homeworld so you don't hard code. it will always just go to whatever link is there. 
  oReq2.send();

}

function reqListenerTwo() {
  let homeWorld = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerHTML = homeWorld.name;
}

// all of the below is for the 2nd person we are supposed to retreive.
let personTwoReq = new XMLHttpRequest();
personTwoReq.addEventListener("load", personTWoRequest);
personTwoReq.open("GET", "https://swapi.co/api/people/14/");
personTwoReq.send();

function personTWoRequest() {
  // logging my response text so i can evaluate it derp derp. 
 // console.log('2nd Info', this.responseText);
  let person14 = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerHTML = person14.name;

  // once agian need to do this request in this function cause we always need to gather that data first
  let speciesVar = new XMLHttpRequest();
  speciesVar.addEventListener("load", getSpecies);
  speciesVar.open("GET", person14.species)
  speciesVar.send();
}

function getSpecies() {
  let finalSpecies = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML = finalSpecies.name;
}

// Now get films
let allFilmsReq = new XMLHttpRequest();
allFilmsReq.addEventListener("load", getAllFilms);
allFilmsReq.open("GET", "https://swapi.co/api/films/");
allFilmsReq.send();

function getAllFilms () {
  //console.log(this.responseText)
  let allFilms = JSON.parse(this.responseText);
  // title is getting your results array. 
  let info = allFilms.results

  
  // use .map is allowing us to loop thru our array of movie titles. we are creating the list
  // just for organization of the titles and plants
  info.map(function (element){
    let film = document.createElement('li'); // creating list
    film.className = 'film';
    document.getElementById('filmList').appendChild(film);
    let filmTitle = document.createElement('h2'); //creating h2 for title name
    filmTitle.className = 'filmTitle';
    film.appendChild(filmTitle);
    filmTitle.innerHTML = element.title;
    let planetsTitle = document.createElement('h3'); // create h3 for planets
    planetsTitle.className = 'planetsTitle';
    film.appendChild(planetsTitle);
    planetsTitle.innerHTML = 'Planets'
  })

  info.map(function(element){
    console.log(element.planets)
  })
}

