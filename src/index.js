function displayPoem(response) {
  console.log("poem generated");

  let poemContainer = document.querySelector("#poem-container");

  poemContainer.innerHTML = "";

  new Typewriter("#poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-input");
  let poemContainer = document.querySelector("#poem-container");

  poemContainer.innerHTML = `
    <p>Generating poem about <strong>${topicInput.value}</strong>...</p>
    <div class="bounce">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  poemContainer.classList.remove("hidden");

  let apiKey = "eob2a41574f3at947904539fe34b012a";

  let prompt = `Generate a poem about ${encodeURIComponent(topicInput.value)}`;

  let context =
    "You are a poet. Write a creative, elegant poem about the user's topic. Use simple language, vivid imagery, and metaphors. Make it exactly 8 lines. Generate an original poem in basic HTML only. Use <p> elements for each line. Do NOT wrap the response in Markdown code fences. Do NOT include ```html or ``` anywhere. Return only the HTML. Credit SheCodes AI at the end of the poem wrapping it in <strong> including a dash before SheCodes AI.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");

poemFormElement.addEventListener("submit", generatePoem);
