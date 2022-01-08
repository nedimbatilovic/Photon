const auth = "563492ad6f917000010000018f67eda00db343659cbb879e1b627126";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos() {
    const dataFetch = await fetch(
        "https://api.pexels.com/v1/curated?per_page=15&page=1",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        }
    );
}
