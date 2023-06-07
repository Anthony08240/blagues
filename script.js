document.addEventListener("DOMContentLoaded", function() {
    const jokeContainer = document.querySelector(".joke");
    const answerContainer = document.querySelector(".answer");
    const showAnswerButton = document.querySelector(".show-answer-btn");
    const newJokeButton = document.querySelector(".new-joke-btn");
    let currentCategory = "";
  
    // Fonction pour obtenir une blague aléatoire
    function getJoke() {
      let apiUrl = "https://v2.jokeapi.dev/joke/Any?lang=fr";
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.type === "single") {
            jokeContainer.textContent = data.joke;
            answerContainer.textContent = "";
            showAnswerButton.style.display = "none";
          } else if (data.type === "twopart") {
            jokeContainer.textContent = data.setup;
            answerContainer.textContent = data.delivery;
            showAnswerButton.style.display = "inline-block";
          }
          answerContainer.style.display = "none";
        })
        .catch(error => {
          console.log("Une erreur s'est produite lors de la récupération de la blague :", error);
        });
    }
  
    // Événement au clic sur le bouton "Afficher la réponse"
    showAnswerButton.addEventListener("click", function() {
      answerContainer.style.display = "block";
      showAnswerButton.style.display = "none";
    });
  
    // Événement au clic sur le bouton "Nouvelle blague"
    newJokeButton.addEventListener("click", function() {
      getJoke();
    });
  
    // Obtenir une blague lors du chargement initial
    getJoke();
  });
  
  