const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  const titolLlista = document.getElementById('titol llista');
  titolLlista.innerText = "Wizards:";

  
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('llistaWizards');
    const newElement = document.createElement('h4');
    const boton = document.createElement('button');
    boton.innerHTML='Destacar';
    

    if(wizard.firstName!==null){

   newElement.innerText = wizard.firstName + wizard.lastName + ":";
   mainHtmlElement.appendChild(newElement);
   

    } else{

      newElement.innerText =wizard.lastName + ":";
   mainHtmlElement.appendChild(newElement);
   
    }
    
    mainHtmlElement.appendChild(boton);

    boton.onclick= function () {
      const flotant = document.getElementById('flotant');
      const mago = document.getElementById('mago');

      if(wizard.firstName!==null){
      mago.innerText= wizard.firstName + '' + wizard.lastName;
      } else {
        mago.innerText= wizard.lastName;
      }


    flotant.appendChild(mago);
    }

    for(const elixir of wizard.elixirs){
        const pocions = document.getElementById('llistaWizards');
        const newElement2 = document.createElement('ul');
        newElement2.innerHTML = `
        <li id="elixir">${elixir.name}</li>
        <button id="boto" onclick = "elixirClicat('${elixir.id}')"> Ingredients </button>
        `;
        pocions.appendChild(newElement2);

    }



    


    
}



};



async function getAllWizards(){
  const response = await fetch(`${BASE_URL}/Wizards`);
  const data = await response.json();
  return data;

}
async function getAllHouses(){
  const response = await fetch(`${BASE_URL}/Houses`);
  const data = await response.json();
  return data;

}


async function elixirClicat(id){
const elixir = await getIngredients(id);
console.log(elixir);

const titol = document.getElementById('titolIngredients');

const mainHtmlElement = document.getElementById('llistaIngredients');


titol.innerText = "Ingredientes de la Pocion:"+elixir.name;
const ing = document.getElementById('llistaIng');
let contingutIng= '<ul>'
if (elixir.ingredients.length === 0){
  let contingutIng2 = `
  <li id="ingredients">No es coneixen els ingredients</li>
  `;

  contingutIng= contingutIng+contingutIng2;

} else {
  for(const ingredientes of elixir.ingredients){

  
  let contingutIng2 = `
  <li id="ingredients">${ingredientes.name}</li>
  `;

  contingutIng= contingutIng+contingutIng2;
  

}
}

let tancarContingut = '</ul>'
contingutIng= contingutIng + tancarContingut;
ing.innerHTML=contingutIng;
}

async function destacarWizard(nom){
  const flotant = document.getElementById('flotant');
  const mago = document.createElement('p')
  mago.innerText= nom;

  flotant.appendChild(mago);
}

async function getIngredients(id){
  const response= await fetch(`${BASE_URL}/elixirs/${id}`);
  const data = await response.json();
  return data;
}


