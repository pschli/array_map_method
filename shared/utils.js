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
  {
    id: 2,
    template: `
    <h3>Example 2</h3>
    <p class="my">Return an array, which contains every value from the original array incremented by 5. We are using one parameter (element) which is the current element of the original array in the loop.</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_2">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 3,
    template: `
    <h3>Example 3</h3>
    <p class="my">Return an array, which contains every value from the original array incremented by the index.
We are using two parameters (element, index) which is the current element of the original array
in the loop and the index of the element.</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_3">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 4,
    template: `
    <h3>Example 4</h3>
    <p class="my">Return an array, which contains every value from the original array added to the previous element's value.
We are using three parameters (element, index, callingArray) which is the current element of the original array
in the loop, the index of the element and the calling array itself.</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_4">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 5,
    template: `
    <h3>Example 5</h3>
    <p class="my">Use a callback function to keep your code efficient</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_5">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 6,
    template: `
    <h3>Example 6</h3>
    <p class="my">Callback functions with more than one parameter</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_6">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 7,
    template: `
    <h3>Example 7</h3>
    <p class="my">Be careful with implicit returns, when using arrow functions</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_7">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
  {
    id: 8,
    template: `
    <h3>Example 8</h3>
    <p class="my">Don't use side effects</p>  
    <h3>Output</h3>
    <div class="output" id="output_example_8">
      <p class="output-text">No Output yet</p>
    </div>`,
  },
];
