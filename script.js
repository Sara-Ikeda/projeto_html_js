let b_planet = document.getElementById("b_planet");
let info_planet = document.getElementById("info_planet");
let search_planet = document.getElementById("search_planet");

async function planets(){
  let p = await fetch('https://swapi.dev/api/planets/?format=json');
  
  let list = await p.json();
  
  console.log(list.results); // Tarefa 1

  list.results.forEach(planet => {
  
    let button = document.createElement('button');

    button.innerHTML = `<button>${planet.name}</button>`; // Tarefa 2
    
    button.addEventListener("click", function() {showPlanet(planet)}); // Tarefa 3
    b_planet.appendChild(button);
  });
  
  document.addEventListener("input", function() { // Tarefa 4
    showPlanet(list.results.find(planet => planet.name == search_planet.value))
  });

}

function showPlanet(show_planet){
  let info = document.createElement('info');

  info.innerHTML = `
    <ul>
     <li>
        <strong>Nome: </strong>${show_planet.name}
      </li>
      <li>
        <strong>Clima: </strong>${show_planet.climate}
      </li>
      <li>
        <strong>População: </strong>${show_planet.population}
      </li>
      <li>
        <strong>Tipo de terreno: </strong>${show_planet.terrain}
      </li>
    </ul>
  `;
  if(info_planet.hasChildNodes()){
    info_planet.removeChild(info_planet.firstElementChild);
  }
  info_planet.appendChild(info);
}

planets();