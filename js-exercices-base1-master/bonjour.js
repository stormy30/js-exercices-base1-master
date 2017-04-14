function Age()
    {   var monNom = document.getElementById("prenom").value;
        var monAge = document.getElementById("age").value;
        var Bonjour = document.createTextNode("Bonjour "+ monNom + "!"+ monAge);
document.getElementById("reponse").appendChild(Bonjour);

var Audio = document.getElementById("player");



if(monAge > 18){
Audio.setAttribute("src","Schuber.mp3");


  }
  else {
    Audio.setAttribute("src","Psycho.mp3");
  }
  Audio.load();
  Audio.play();
}
