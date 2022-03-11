
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/168468387/task?');

request.setRequestHeader('Authorization', 'pk_2626364_EZBVP3KRT6S8I46ML3RNYUS2RIUBMGW6');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();