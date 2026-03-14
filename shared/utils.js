export function showExample(id) {
  if (id === undefined) {
    console.error("missing example id");
    return;
  }

  let elementId = "example_" + id.toString();
  let element = document.getElementById(elementId);

  if (element === null) return;

  let template = EXAMPLES.find((example) => id === example.id)?.template;

  if (!template) return;

  renderTemplate(template, element, true);
}

export function showOutput(originalArray, newArray, id) {
  if (id === undefined) {
    console.error("missing example id");
    return;
  }

  let elementId = "output_example_" + id.toString();
  let element = document.getElementById(elementId);

  if (element === null) return;

  if (!originalArray && !newArray) return;

  let originalOutput = createTemplate("Original Array: ", originalArray);
  let newOutput = createTemplate("New Array: ", newArray);

  renderTemplate("", element, true);
  renderTemplate(originalOutput, element);
  renderTemplate(newOutput, element);
}

function renderTemplate(template, element, deleteContent = false) {
  if (deleteContent) element.innerHTML = template;
  else element.innerHTML += template;
}

function createTemplate(text, srcArray) {
  if (!Array.isArray(srcArray)) {
    return `<p class="output-text">${text} not an Array!</p>`;
  }
  if (srcArray.length === 0) {
    return `<p class="output-text">${text} []</p>`;
  }
  let outputArray = transformArray(srcArray);
  return `<p class="output-text">${text} ${outputArray}</p>`;
}

function transformArray(srcArray) {
  let arrayContent = srcArray.toString().replaceAll(",", ", ");
  return "[" + arrayContent + "]";
}

const EXAMPLES = [
  { id: 0, template: "Hello World" },
  {
    id: 1,
    template: `
      <h3>Output</h3>
      <div class="output" id="output_example_1">
        <p class="output-text">No Output yet</p>
      </div>`,
  },
];
