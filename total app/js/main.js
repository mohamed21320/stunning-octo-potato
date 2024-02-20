var Name = document.getElementById("siteName");
var Url = document.getElementById("siteUrl");
var nameMessage =document.getElementById("Namemessage");
var urlMessage=document.getElementById("Urlmessage");
storeData = [];
if(localStorage.getItem("data")!=null){
  storeData =JSON.parse(localStorage.getItem("data"))
  displayData();
}

function addData() {
  if( validName() && validUrl()){
    var store = {
      name: Name.value,
      url: Url.value,
    }
    storeData.push(store);
    localStorage.setItem("data",JSON.stringify(storeData));
    deleteData();
    displayData();
    console.log(storeData);
  }
  
}

function deleteData() {
  Name.value = "";
  Url.value = "";
}
function displayData() {
  var display = "";
  for (var i = 0; i < storeData.length; i++) {
    display += `<tr>
    <td>${i}</td>
    <td>${storeData[i].name}</td>
    <td><a class="btn btn-warning" target="_blank" href="${storeData[i].url}">visit</a></td>
    <td > <button onclick=" deleteItem(${i})" class="btn btn-danger ">delete</button></td>
</tr>
`;
  }
  document.getElementById("display").innerHTML = display;
}

function deleteItem(indx){
storeData.splice(indx,1);
localStorage.removeItem("data",JSON.stringify(storeData));
displayData();
}

function validName(){
  var text=Name.value;
  var regex=/^[a-z]{2,9}[ ]{0,1}[a-z]{0,11}$/
  if(regex.test(text)){
    Name.classList.add("is-valid");
    Name.classList.remove("is-invalid");
    nameMessage.classList.add("d-none");
    return true;
  }else{
    Name.classList.add("is-invalid");
    Name.classList.remove("is-valid");
    nameMessage.classList.remove("d-none");
    return false;
  }
}
function validUrl(){
  var link=Url.value;
  var regexURL=/^https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
  if(regexURL.test(link)){
Url.classList.add("is-valid");
Url.classList.remove("is-invalid");
urlMessage.classList.add("d-none");
    return true;
  }else{
    Url.classList.add("is-invalid");
    Url.classList.remove("is-valid");
    urlMessage.classList.remove("d-none");
    return false;
  }
}
