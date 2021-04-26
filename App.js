console.log('Script is working from externak file');
var btnTranslator = document.querySelector('#btn-translate');
var textInput = document.querySelector('#text-area');
var text = textInput.value;
var outputdiv = document.querySelector('#output');

var url = "https://api.funtranslations.com/translate/minion.json";
btnTranslator.addEventListener('click',() => {
     console.log("button Clicked");
     var text = textInput.value;
     console.log("input " + text );
    //outputdiv.innerText = textInput.value;
    var url1 = url + "?"+ "text=" + text;
    fetch(url1)
    .then(response => response.json())
    .then(json => outputdiv.innerText = "Translated Text : " + json.contents.translated)
    .catch(err => console.log("Error : " + err))
});

