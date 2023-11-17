const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  const titolLlista = document.getElementById('titol llista');
  titolLlista.innerText = "Wizards:";

  
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('wizard');
    const newElement = document.createElement('p');
    
    if(wizard.firstName!==null){
    newElement.innerHTML = `
    <h4>${wizard.firstName} ${wizard.lastName}:</h4>
    `;
    mainHtmlElement.appendChild(newElement);
    } else{
      newElement.innerHTML = `
    <p>${wizard.lastName}</p>
    `;
    mainHtmlElement.appendChild(newElement);
    }


    
    for(const elixirs of wizard.elixirs){
        const pocions = document.getElementById('llistaPocions');
        const newElement2 = document.createElement('li');
        newElement2.innerHTML = `
        <li id="elixir">${elixirs.name}</li>
        <button> ingredients <button>
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