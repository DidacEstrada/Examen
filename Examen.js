const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <h2>Wizards</h2>
    `;
    mainHtmlElement.appendChild(newElement);
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    
    if(wizard.firstName!==null){
    newElement.innerHTML = `
    <p>${wizard.firstName} ${wizard.lastName}</p>
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