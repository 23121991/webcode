var div = document.createElement("div")
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");

var button = document.createElement("button");
button.setAttribute("type", "button");

button.setAttribute("class","btn btn-primary");
button.innerHTML = "Search";
button.addEventListener("click",foo);

let country = document.createElement("div");
country.setAttribute("id","name");
// let country_id= document.createElement("div");
// country_id.setAttribute("id", "country_id");
// let probability = document.createElement("div");
// probability.setAttribute("id", "probability");

div.append(input,button,country);
document.body.append(div);

async function foo(){

    let res = document.getElementById("name").value;
    let url = `https://api.nationalize.io/?name=${res}`;

    let result = await fetch(url);
    let result1 = await result.json();

    console.log(result1); 

    // country.innerHTML =`nationalize:${result1}`;
    country.innerHTML =`nationalize:${result1}`;

    // console.log(result1);
    // country.innerHTML =`country id:${result1.country_id.bodyvalue}`;

    // console.log(result1);
    // country.innerHTML =`probability:${result1.country.probability.value}`;




}