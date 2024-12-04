const divButtons = document.getElementById("div-buttons");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const congratulationsContainer = document.getElementById(
  "congratulations-container"
);

noButton.addEventListener("mouseover", (e) => {
  divButtons.classList.toggle("div-buttons");
  console.log("over");
});

yesButton.addEventListener("click", (e) => {
  e.preventDefault();
  congratulationsContainer.innerHTML = `

    <span class="congratulations-box">
        <p class="congratulations-title">Muy Bien!!!</p>
        <p class="congratulations-subtitle">
            Has tomado la mejor desición de tu vida. Ama y se feliz!!!!
        </p>
        <hr class="congratulations-separator"/>
        <p class="congratulations-message">¡Felicidades!</p>
    </span>
  `;
});
