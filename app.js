const auth = "563492ad6f917000010000018f67eda00db343659cbb879e1b627126";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

// event listenrs
searchInput.addEventListener("input", updateInput);

function updateInput(e) {}

async function curatedPhotos() {
    const dataFetch = await fetch("https://api.pexels.com/v1/curated", {
        method: "GET",
        headers: {
            Accept: "application.json",
            Authorization: auth,
        },
    });
    const data = await dataFetch.json();
    data.photos.forEach((photo) => {
        console.log(photo);
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `
            <img src=${photo.src.large}></img>
            <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    });
}

async function searchPhotos(query) {
    const dataFetch = await fetch(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
            method: "GET",
            headers: {
                Accept: "application.json",
                Authorization: auth,
            },
        }
    );
}

curatedPhotos();
