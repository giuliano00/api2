var request = require('request');

request('https://kitsu.io/api/edge/episodes/28', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  

  var objJson = JSON.parse(body);
  console.log('Titulo: ', objJson.data.attributes.created.At);
  //console.log('Titulo: ', objJson.data.attributes.titles.en);
  
});