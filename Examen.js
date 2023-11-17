const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    
    newElement.innerHTML = `
    
    <p>${wizards.lastName.map(typeContainer => typeContainer.type.name)}
    `;
    mainHtmlElement.appendChild(newElement);

    
}


async function getAllWizards(){
  const response = await fetch(`${BASE_URL}/Wizards`);
  const data = await response.json();
  return data.results;

}