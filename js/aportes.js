  var myList = document.querySelector('#lista');
  var Init = { method: 'GET',
               mode: 'cors' };
  var myRequest = new Request('https://m.consultoria-sap.com/json/aportes.json',Init);
fetch(myRequest)
.then(function(response) { return response.json(); })
.then(function(data) {
    for (var i = 0; i < data.topic_list.topics.length; i++) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + data.topic_list.topics[i].title + '</strong> descargado ' +
                           data.topic_list.topics[i].views +
                           ' veces!';
      myList.appendChild(listItem);
    }
  });