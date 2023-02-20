// categories
const categoriesContainer = document.querySelector(".hero-categories");
const itemTemplate = (category) => {
  return ` <button>
        <img
          src="${category.path}"
          alt="${category.name}"
          width="80"
          height="65"
        />
        <p>${category.name}</p>
      </button>`;
};

fetch("assets/data/hero-categories.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((category) => {
      categoriesContainer.innerHTML += itemTemplate(category);
    });
  })
  .catch((err) => console.log(err));
