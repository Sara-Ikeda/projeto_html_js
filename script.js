let b_planet = document.getElementById("b_planet");

async function printPlanets(){

  let p = await fetch('https://swapi.dev/api/planets/?format=json');
  
  let list = await p.json();
  
  console.log(list.results);

  list.results.forEach(planet => {
  
    let button = document.createElement('button');

    button.innerHTML = `<button>${planet.name}</button>`;

    b_planet.appendChild(button);

  });
}

printPlanets();