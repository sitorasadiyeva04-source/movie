const moviesData = [
    { 
        title: "Patton Oswalt: Annihilation", 
        rating: "7.4", 
        year: "2017", 
        time: "1 hr 6 min", 
        genre: "Uncategorized", 
        image: "1200x675mf.jpg.png" // 1. Остается
    },
    { 
        title: "New York Doll", 
        rating: "7.9", 
        year: "2005", 
        time: "1 hr 15 min", 
        genre: "Documentary Music", 
        image: "images (3).jpg" // 2. Image 3
    },
    { 
        title: "Mickey's Magical Christmas", 
        rating: "6.8", 
        year: "2001", 
        time: "1 hr 5 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (1).jpg" // 3. Image 1
    },
    { 
        title: "And Then I Go", 
        rating: "7.6", 
        year: "2017", 
        time: "1 hr 39 min", 
        genre: "Drama", 
        image: "images (4).jpg" // 4. Image 4
    },
    { 
        title: "An Extremely Goofy Movie", 
        rating: "6.4", 
        year: "2000", 
        time: "1 hr 19 min", 
        genre: "Animation Comedy Family", 
        image: "600x900.webp" // 5. 600
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" // 6. Image 2 (и остальные карточки)
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    },
    { 
        title: "Peter Rabbit", 
        rating: "6.6", 
        year: "2018", 
        time: "1 hr 35 min", 
        genre: "Adventure Animation Comedy", 
        image: "images (2).jpg" 
    }
];

function renderMovies(moviesArray) {
    const container = document.querySelector('.movies-container');
    if (!container) return;

    container.innerHTML = '';

    moviesArray.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.rating} &nbsp; ${movie.year} &nbsp; ${movie.time}<br>${movie.genre}</p>
            <button class="more-btn">More info</button>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(moviesData);

    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('SearchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = moviesData.filter(movie => 
                movie.title.toLowerCase().includes(query)
            );
            renderMovies(filtered);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});