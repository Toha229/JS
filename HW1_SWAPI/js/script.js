const URL = "https://swapi.dev/api/people";

fetch(URL).then(response => {
    return response.json()
}).then(data => {
    PrintPerson(data);
})

function PrintPerson(persons) {
    persons.results.forEach(person => {
        GetPlanetName(person.homeworld).then((value) => {
            console.log(`Name: ${person.name}\nBirth year: ${person.birth_year}\nHome world: ${value}`)
          });
    });
}

function GetPlanetName(planetURL) {
    return fetch(planetURL).then(response => {
        return response.json()
    }).then(data =>{
        return data.name;
    });
}