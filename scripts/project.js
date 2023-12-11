document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    const catImagesContainer = document.getElementById('cat-images');

    
    async function fetchCatImages() {
        const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayCatImages(data);
        } catch (error) {
            console.error('Error fetching cat images:', error);
        }
    }

    
    function displayCatImages(images) {
        // Clear previous images
        catImagesContainer.innerHTML = '';

        // Display each cat image
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = 'Cat Image';
            catImagesContainer.appendChild(imgElement);
        });
    }

    function clearImages(){
        catImagesContainer.innerHTML = '';
    }
    
    fetchButton.addEventListener('click', fetchCatImages);
    clearButton.addEventListener('click', clearImages);
});
