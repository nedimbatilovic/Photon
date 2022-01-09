const auth = "563492ad6f917000010000018f67eda00db343659cbb879e1b627126";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;

// event listenrs
searchInput.addEventListener("input", (e) => {
    searchValue = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchPhotos(searchValue);
});

async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        },
    });
    const data = await dataFetch.json();
    return data;
}

function generatePictures(data) {
    data.photos.forEach((photo) => {
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = ` 
        <div class="gallery-info">
            <p>${photo.photographer}</p>
            <a href=${photo.src.original}>Download</a>
        </div>
        <img src=${photo.src.large}/>
        `;
        gallery.appendChild(galleryImg);
    });
}

async function curatedPhotos() {
    const data = await fetchApi(
        "https://api.pexels.com/v1/curated?per_page=15&page=1"
    );
    generatePictures(data);
}

async function searchPhotos(query) {
    gallery.innerHTML = "";
    searchInput.value = "";
    const data = await fetchApi(
        `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`
    );
    generatePictures(data);
}

curatedPhotos();
