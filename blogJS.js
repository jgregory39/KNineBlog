

function postClick() {
var title = document.getElementById('postTitle').value;
 var user = document.getElementById('postUser').value;
 var date = document.getElementById('postDate').value;
 var address = document.getElementById('postAddress').value;
 var caption = document.getElementById('postCaption').value;
if(title == "" || user == "" || date == "" || address == "" || caption =="" ){
  alert("Invalid parameters");
}
else{
  const div = document.createElement('div');
  div.className = 'card';

  div.innerHTML += " <h2>" + title +"</h2>";
  div.innerHTML += "<h5>Post by " + user + ", " + date + "</h5>";
 div.innerHTML += "<img src=" + address +">";
 div.innerHTML +=   "<p>"+ caption +"</p>";
   document.getElementById('start').appendChild(div);
}

}
