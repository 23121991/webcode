# webcode
nationalize
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div>
        <h1 style="text-align:center; margin-top:200px; color:orangered">NATIONALIZE</h1>
        <script src="script.js">
            
        </script>
    </div>
</body>
</html>


script.js


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







index.css
h1{
    font-style:calc();
    font-family:fantasy;
    font-weight: 200;
    font-feature-settings: "c2sc";
    
}
button{
    flex-direction: initial;
    -ms-flex-align: center;
    font-size: medium;

}
div{
 background-color:rgb(220, 235, 245);
    color :black;
}
