"use strict";

const searchInput = document.querySelector("#place-search");
const categoryFilter = document.querySelector("#category-filter");
const searchForm = document.querySelector("#search-form");
const placeCards = [...document.querySelectorAll(".place-card")];
const resultsCount = document.querySelector("#results-count");
const emptyResults = document.querySelector("#empty-results");
const planList = document.querySelector("#plan-list");
const planEmpty = document.querySelector("#plan-empty");
const planCount = document.querySelector("#plan-count");
const clearPlanButton = document.querySelector("#clear-plan");
const selectedPlaces = new Map();

function filterPlaces() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const category = categoryFilter.value;
  let visibleCount = 0;

  for (const card of placeCards) {
    const matchesQuery = card.dataset.search.includes(query);
    const matchesCategory = category === "all" || card.dataset.category === category;
    const isVisible = matchesQuery && matchesCategory;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  resultsCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "example experience" : "example experiences"}`;
  emptyResults.hidden = visibleCount > 0;
}

function renderPlan() {
  planList.replaceChildren();

  if (selectedPlaces.size === 0) {
    planList.append(planEmpty);
    planEmpty.hidden = false;
  } else {
    for (const [id, title] of selectedPlaces) {
      const item = document.createElement("li");
      item.className = "plan-item";

      const name = document.createElement("span");
      name.textContent = title;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-place";
      removeButton.type = "button";
      removeButton.textContent = "Remove";
      removeButton.setAttribute("aria-label", `Remove ${title} from my plan`);
      removeButton.addEventListener("click", () => removePlace(id));

      item.append(name, removeButton);
      planList.append(item);
    }
  }

  const count = selectedPlaces.size;
  planCount.textContent = `${count} ${count === 1 ? "place" : "places"} in your plan`;
  clearPlanButton.disabled = count === 0;
}

function addPlace(card) {
  const id = card.dataset.place;
  const title = card.querySelector("h3").textContent;
  if (selectedPlaces.has(id)) return;

  selectedPlaces.set(id, title);
  const button = card.querySelector(".add-place");
  button.disabled = true;
  button.innerHTML = 'Added <span aria-hidden="true">✓</span>';
  renderPlan();
}

function removePlace(id) {
  selectedPlaces.delete(id);
  const card = placeCards.find((candidate) => candidate.dataset.place === id);
  if (card) {
    const button = card.querySelector(".add-place");
    button.disabled = false;
    button.innerHTML = 'Add to my plan <span aria-hidden="true">+</span>';
  }
  renderPlan();
}

searchInput.addEventListener("input", filterPlaces);
categoryFilter.addEventListener("change", filterPlaces);
searchForm.addEventListener("reset", () => {
  window.setTimeout(filterPlaces, 0);
});

for (const card of placeCards) {
  card.querySelector(".add-place").addEventListener("click", () => addPlace(card));
}

clearPlanButton.addEventListener("click", () => {
  for (const id of selectedPlaces.keys()) {
    const card = placeCards.find((candidate) => candidate.dataset.place === id);
    if (card) {
      const button = card.querySelector(".add-place");
      button.disabled = false;
      button.innerHTML = 'Add to my plan <span aria-hidden="true">+</span>';
    }
  }
  selectedPlaces.clear();
  renderPlan();
});

renderPlan();
