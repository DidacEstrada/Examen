const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  const titolLlista = document.getElementById('titol llista');
  titolLlista.innerText = "Wizards:";

  
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('llistaWizards');
    const newElement = document.createElement('h4');
    
    if(wizard.firstName!==null){
   newElement.innerText = wizard.firstName + wizard.lastName + ":";
   mainHtmlElement.appendChild(newElement);
    } else{
      newElement.innerText =wizard.lastName + ":";
   mainHtmlElement.appendChild(newElement);
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

async function elixirClicat(id){
const elixir = await getIngredients(id);
console.log(elixir);



for(const ingredientes of elixir.ingredients){

   const mainHtmlElement = document.getElementById('llistaWizards');
    const newElement = document.createElement('h4');
    newElement.innerText = "Ingredientes de la Pocion:"+ingredientes.name;
    mainHtmlElement.appendChild(newElement);
    
  const ing = document.getElementById('llistaWizards');
  const newElement3 = document.createElement('ul');
  newElement3.innerHTML = `
  <li id="ingredients">${ingredientes.name}</li>
  `;
  ing.appendChild(newElement3);

}
}

async function getIngredients(id){
  const response= await fetch(`${BASE_URL}/elixirs/${id}`);
  const data = await response.json();
  return data;
}


