const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const init = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Freelancer Forum";
  document.body.append(h1);

  const h2 = document.createElement("h2");
  h2.innerText = `The average staring price is`;
  document.body.append(h2);

  const nameHeader = document.createElement("h1");
};

init();

/** Adds a shape with random properties to the `shapes` array */
function addFreelancer() {
  const freelancer =
    freelancers[Math.floor(Math.random() * freelancers.length)];

  // TODO: Randomize the size of the shape
  const size = "small";

  freelancers.push(freelancer);
}

// === Render ===
// To "render" is to update the DOM to reflect the current state.
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
function sum(arr) {
  let price = 0;
  for (let i = 1; i < arr.length; i++) {
    price += arr[i].price;
  }
  return price;
}

function render() {
  // Render the freelancers
  const freelancerList = document.querySelector("#freelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const freelancerElement = document.createElement("tr");
    freelancerElement.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.price}</td><td>${freelancer.occupation}</td>`;
    return freelancerElement;
  });
  freelancerList.replaceChildren(...freelancerElements);

  let average = sum(freelancers) / freelancers.length;

  const averageElement = document.querySelector("h2");
  averageElement.innerText = `The average staring price is ${average}.`;
  // TODO: Render the circles
}

// === Script ===
// In this section, we call the functions that we've defined above.

// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(() => {
  addFreelancer();
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}, 1000);

render(); // We call this function once to render the initial state
