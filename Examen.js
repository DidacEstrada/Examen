const BASE_URL =  'https://wizard-world-api.herokuapp.com'; 

window.onload = async () => {
  const wizards = await getAllWizards();
  const mainHtmlElement = document.getElementById('main');
  const newElement3 = document.createElement('div');
        newElement3.innerHTML = `
        <h2> Wizards:</h2>
        `;
        mainHtmlElement.appendChild(newElement3);

  
  for(const wizard of wizards){
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    
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
        const newElement2 = document.createElement('div');
        newElement2.innerHTML = `
        <li id="elixir">${elixirs.name}</li>
        <button> ingredients <button>
        `;
        mainHtmlElement.appendChild(newElement2);

    }


    
}
};


async function getAllWizards(){
  const response = await fetch(`${BASE_URL}/Wizards`);
  const data = await response.json();
  return data;

}