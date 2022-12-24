const URL = "https://swapi.dev/api/people";
const tape = document.querySelector(".tape");

request(URL);

function PrintPerson(persons) {
    persons.results.forEach(person => {
        GetPlanetName(person.homeworld).then((value) => {
            createDiv(person, value);
        });
    });
}

function GetPlanetName(planetURL) {
    return fetch(planetURL).then(response => {
        return response.json()
    }).then(data => {
        return data.name;
    });
}
let p = 1;
function request(URL) {
    fetch(URL).then(response => {
        return response.json()
    }).then(data => {
        PrintPerson(data);
        if(data.next!=null){
            request(data.next);
        }
    })
}
function createDiv(person, planet){
    let div = document.createElement("div");
    div.setAttribute("class", "character-preview");

    let p = createInfo(person.name);
    p.setAttribute("style", "font-weight: bold; font-size: xx-large;");
    div.appendChild(p);
    div.appendChild(createInfo("Birthday: " + person.birth_year));
    div.appendChild(createInfo("Planet Name: " + planet));
    
    tape.appendChild(div);
}

function createInfo(text){
    let p = document.createElement("p");
    p.textContent = text;
    p.setAttribute("class", "character-info");
    return p;
}