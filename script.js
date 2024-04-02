let b_planet = document.getElementById("b_planet");
let info_planet = document.getElementById("info_planet");

async function Planets(){

  let p = await fetch('https://swapi.dev/api/planets/?format=json');
  
  let list = await p.json();
  
  console.log(list.results);

  list.results.forEach(planet => {
  
    let button = document.createElement('button');

    button.innerHTML = `<button>${planet.name}</button>`;
    button.addEventListener("click", function(){printPlanet(planet)})

    b_planet.appendChild(button);

  });

}

function printPlanet(planet){
  let info = document.createElement('info');

  info.innerHTML = `
    <ul>
      <li>
        <strong>Nome: </strong>${planet.name}
      </li>
      <li>
        <strong>Clima: </strong>${planet.climate}
      </li>
      <li>
        <strong>População: </strong>${planet.population}
      </li>
      <li>
        <strong>Tipo de terreno: </strong>${planet.terrain}
      </li>
    </ul>
  `;
  if(info_planet.hasChildNodes()){
    info_planet.removeChild(info_planet.firstElementChild);
  }
  info_planet.appendChild(info);
}


Planets();