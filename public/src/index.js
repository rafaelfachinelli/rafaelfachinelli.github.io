fetch('https://api.github.com/users/rafaelfachinelli')
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('Failed retrieving information', error));