    var content = document.getElementById('ori');

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            if(data.status == 'ok'){

                var output = '<h3>'+data.feed.title+'</h3>';

                for(var i=0;i<data.items.length;++i){

                    output += '<p><h4><a href="' +
                    data.items[i].link + '" >' +
                    data.items[i].title + '</h4></a><br />' +
                    data.items[i].description + '... </p>';

                }


                content.innerHTML = output;

            }
        }
    };
    xhr.open('GET','https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fforos.consultoria-sap.com%2Ftags%2Forientacion.rss',true);
    xhr.send();
