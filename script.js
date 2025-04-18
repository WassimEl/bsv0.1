let enigmes = [];
let indexActuel = 0;
let solutionVisible = false;

async function chargerEnigmes() {
  const response = await fetch('enigmes.json');
  enigmes = await response.json();
  choisirEnigmeAleatoire();
}

function choisirEnigmeAleatoire() {
  const nouvelIndex = Math.floor(Math.random() * enigmes.length);
  indexActuel = nouvelIndex;
  afficherEnigme();
}

function afficherEnigme() {
  const enigme = enigmes[indexActuel];
  document.getElementById('titre').innerText = enigme.titre;
  document.getElementById('description').innerText = enigme.description;
  document.getElementById('solution').innerText = enigme.solution;
  document.getElementById('solution').style.display = "none";
  document.querySelector('button.reveal').innerText = "Révéler la solution";
  solutionVisible = false;

  const img = document.getElementById("image");
  if (enigme.image) {
    img.src = enigme.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function toggleSolution() {
  const solution = document.getElementById('solution');
  solutionVisible = !solutionVisible;
  solution.style.display = solutionVisible ? "block" : "none";
  document.querySelector('button.reveal').innerText = solutionVisible
    ? "Cacher la solution"
    : "Révéler la solution";
}

function suivant() {
  choisirEnigmeAleatoire();
}

chargerEnigmes();
