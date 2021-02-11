


// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
async function getNasaPicture() {
    try {
        const response = await fetch(apiUrl);
        resultsArray = response.json();
        console.log(resultsArray);
    } catch (error) {
        console.log(error);
    }
}

// On Load
getNasaPicture();