const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    
    if(wizard.firstName!==null){
    newElement.innerHTML = `
    <h4>${wizard.firstName} ${wizard.lastName}:</h4>
    <p>${wizard.elixirs.name}</p>
    `;
    mainHtmlElement.appendChild(newElement);
    } else{
      newElement.innerHTML = `
    <p>${wizard.lastName}</p>
    `;
    mainHtmlElement.appendChild(newElement);
    }
    
}
};


async function getAllWizards(){
  const response = await fetch(`${BASE_URL}/Wizards`);
  const data = await response.json();
  return data;

}