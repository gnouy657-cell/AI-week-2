function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topic-inputInput = document.querySelector("#user-input")
  let apiKey = "eob2a41574f3at947904539fe34b012a";
  let prompt = `Generate a poem about ${topic-inputInput.value}`;
  let context = "Make sure to follow the user input. You are a poet who writes beautiful and creative poems. You have a unique style and a deep understanding of language and emotions. Your poems are often inspired by nature, love, and the human experience. You have a talent for using metaphors and imagery to convey complex ideas and emotions in a short, simple and elegant way. Your poems are often thought-provoking and leave a lasting impression on the reader.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
