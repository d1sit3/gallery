const mainItems = document.querySelector(".main__items");
const btn = document.querySelector(".header__btn");

const getNewItems = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const newElement = document.createElement("div");
        newElement.classList.add("post");
        newElement.innerHTML = ` <img src="${post.url}"  alt="cat" width="350" height="250"/> `;
        mainItems.appendChild(newElement);
      });
    })
    .catch((error) => {
      console.error("error:", error);
    });
};

const removeLoader = () =>{
  document.querySelector(".loader").classList.add("loader-remove");
};

btn.addEventListener("click", () =>{
    getNewItems();
    removeLoader();
});
