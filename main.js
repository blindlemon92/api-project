document.addEventListener('DOMContentLoaded', () => {
    const getDataButton = document.querySelector('#get-data-button');
    getDataButton.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/4796?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer = document.querySelector('#data-container');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', () => {
            const dataContainer = document.querySelector('#data-container');
            dataContainer.innerHTML = '';
        });

    const getDataButton2 = document.querySelector('#get-data-button2');
    getDataButton2.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/28067?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer2 = document.querySelector('#data-container2');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer2.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer2.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton2 = document.querySelector('#clear-button2');
        clearButton2.addEventListener('click', () => {
            const dataContainer2 = document.querySelector('#data-container2');
            dataContainer2.innerHTML = '';
        });

    const getDataButton3 = document.querySelector('#get-data-button3');
    getDataButton3.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/34181?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer3 = document.querySelector('#data-container3');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer3.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer3.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton3 = document.querySelector('#clear-button3');
        clearButton3.addEventListener('click', () => {
            const dataContainer3 = document.querySelector('#data-container3');
            dataContainer3.innerHTML = '';
        });

    const getDataButton4 = document.querySelector('#get-data-button4');
    getDataButton4.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/75644?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer4 = document.querySelector('#data-container4');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer4.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer4.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton4 = document.querySelector('#clear-button4');
        clearButton4.addEventListener('click', () => {
            const dataContainer4 = document.querySelector('#data-container4');
            dataContainer4.innerHTML = '';
        });

    const getDataButton5 = document.querySelector('#get-data-button5');
    getDataButton5.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/87479?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer5 = document.querySelector('#data-container5');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer5.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer5.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton5 = document.querySelector('#clear-button5');
        clearButton5.addEventListener('click', () => {
            const dataContainer5 = document.querySelector('#data-container5');
            dataContainer5.innerHTML = '';
        });

    const getDataButton6 = document.querySelector('#get-data-button6');
    getDataButton6.addEventListener('click', () => {
        fetch(`https://api.artic.edu/api/v1/artworks/146701?fields=id,title,artist_display,date_display,main_reference_number`)
            .then(response => response.json())
            .then(data => {
                dataContainer6 = document.querySelector('#data-container6');
                const titleElement = document.createElement('h1');
                titleElement.textContent = data.data.title;
                dataContainer6.appendChild(titleElement);

                const artistElement = document.createElement('h2');
                artistElement.textContent = `Artist ${data.data.artist_display}`;
                dataContainer6.appendChild(artistElement);
            })
            .catch(error => console.error(error));
        });

        const clearButton6 = document.querySelector('#clear-button6');
        clearButton6.addEventListener('click', () => {
            const dataContainer6 = document.querySelector('#data-container6');
            dataContainer6.innerHTML = '';
        });

    });