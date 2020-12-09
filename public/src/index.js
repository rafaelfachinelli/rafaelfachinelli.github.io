fetch('https://api.github.com/users/rafaelfachinelli/repos?type=sources')
  .then(response => response.json())
  .then(repositories => loadRepositories(repositories))
  .catch(error => console.error('Failed retrieving information', error));

function loadRepositories(repositories) {
  const mainContentElement = document.querySelector('.main__content');
  console.log(repositories);

  for(repositorie of repositories) {
    if (!repositorie.fork) {
      const divCardElement = document.createElement('div');
      divCardElement.classList.add('card');
  
      const divCardFaceFrontElement = document.createElement('div');
      divCardFaceFrontElement.classList.add('card__face');
      divCardFaceFrontElement.classList.add('face--front');
  
      const imgFaceImageElement = document.createElement('img');
      imgFaceImageElement.classList.add('face__image');
      imgFaceImageElement.setAttribute('src', `${repositorie.html_url}/blob/${repositorie.default_branch}/.github/banner.svg?raw=true`);
      imgFaceImageElement.setAttribute('alt', repositorie.name);
  
      const divCardFaceBackElement = document.createElement('div');
      divCardFaceBackElement.classList.add('card__face');
      divCardFaceBackElement.classList.add('face--back');
  
      const h1FaceTitleElement = document.createElement('h1');
      h1FaceTitleElement.classList.add('face__title');
      h1FaceTitleElement.innerText = repositorie.name;
  
      const pFaceDescriptionElement = document.createElement('p');
      pFaceDescriptionElement.classList.add('face__description');
      pFaceDescriptionElement.innerText = repositorie.description;
  
      const buttonFaceElement = document.createElement('a');
      buttonFaceElement.classList.add('face__button');
      buttonFaceElement.setAttribute('href', repositorie.html_url);
      buttonFaceElement.setAttribute('target', '_blank');
      buttonFaceElement.innerText = 'View';
      
      divCardElement.appendChild(divCardFaceFrontElement);
  
      divCardFaceFrontElement.appendChild(imgFaceImageElement);
      divCardFaceFrontElement.appendChild(divCardFaceBackElement);
  
      divCardFaceBackElement.appendChild(h1FaceTitleElement);
      divCardFaceBackElement.appendChild(pFaceDescriptionElement);
      divCardFaceBackElement.appendChild(buttonFaceElement);

      mainContentElement.appendChild(divCardElement);
    }
  }
}
