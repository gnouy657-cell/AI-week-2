function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-container", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
