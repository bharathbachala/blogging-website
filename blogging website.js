/* =========================================
   MOVIE DATA + 100 WORD BLOGS
========================================= */

const movies = [

    {
        id: 1,

        title: "Interstellar",

        year: 2014,

        genre: "Sci-Fi",

        rating: "9.0",

        image: "images/interstellar.jpg",

        description:
            "A group of explorers travels through a wormhole in space in search of a new home for humanity.",

        blog:
            "Interstellar is one of those movies that combines science, emotion, and imagination in a powerful way. The story follows Cooper, a former pilot who joins a dangerous mission through a wormhole to search for a new home for humanity. What makes the movie special is how it connects enormous scientific ideas with deeply personal emotions. The relationship between Cooper and his daughter becomes the emotional heart of the story. Christopher Nolan creates spectacular space sequences while Hans Zimmer's music adds tremendous emotional weight. The movie explores time, gravity, love, sacrifice, and humanity's desire to survive. Interstellar leaves you thinking about space and life long after the credits."
    },


    {
        id: 2,

        title: "The Dark Knight",

        year: 2008,

        genre: "Action",

        rating: "9.0",

        image: "images/dark-knight.jpg",

        description:
            "Batman faces one of his greatest challenges when the Joker arrives in Gotham.",

        blog:
            "The Dark Knight is much more than a traditional superhero movie. It presents Gotham as a city struggling between order and chaos while Batman tries to protect its people. The Joker creates an unpredictable threat that challenges Batman's principles and forces him to question how far he can go to stop crime. The conflict between Batman and the Joker gives the movie its unforgettable intensity. The performances, especially the portrayal of the Joker, create some of the most memorable scenes in modern cinema. The film also explores morality, sacrifice, justice, and responsibility. Its dark atmosphere, practical action sequences, powerful dialogue, and memorable characters make it an extraordinary cinematic experience."
    },


    {
        id: 3,

        title: "Inception",

        year: 2010,

        genre: "Sci-Fi",

        rating: "8.8",

        image: "images/inception.jpg",

        description:
            "A skilled thief enters people's dreams to steal secrets but is given an impossible task.",

        blog:
            "Inception is a fascinating science-fiction thriller built around dreams and the human mind. Dom Cobb is a skilled extractor who enters people's dreams to steal valuable information. Instead of stealing information, however, he receives a difficult assignment to plant an idea inside someone's mind. The movie constantly plays with reality and perception, creating layers of dreams within dreams. Christopher Nolan carefully builds the story while keeping the audience questioning what is real. The rotating hallway fight, the city folding over itself, and the famous spinning top are unforgettable moments. Beneath the complicated science-fiction concept is an emotional story about guilt, memory, family, and the desire to return home."
    },


    {
        id: 4,

        title: "Avengers: Endgame",

        year: 2019,

        genre: "Action",

        rating: "8.4",

        image: "images/endgame.jpg",

        description:
            "The Avengers attempt to reverse the devastating events caused by Thanos.",

        blog:
            "Avengers: Endgame represents the conclusion of a massive cinematic journey built across many Marvel movies. After Thanos causes devastating losses, the remaining heroes must find a way to change the past and give humanity another chance. The movie combines action, humor, emotion, and nostalgia while bringing together many familiar characters. Several moments are designed around the history of the Marvel Cinematic Universe, making the experience especially meaningful for longtime viewers. The final battle provides an enormous spectacle filled with heroes and memorable moments. At its heart, however, Endgame is about friendship, sacrifice, family, and accepting difficult choices. It feels like both an action movie and a celebration of a long cinematic journey."
    },


    {
        id: 5,

        title: "Titanic",

        year: 1997,

        genre: "Romance",

        rating: "7.9",

        image: "images/titanic.jpg",

        description:
            "A young couple from different social backgrounds falls in love aboard the Titanic.",

        blog:
            "Titanic combines historical tragedy with a deeply emotional romantic story. The movie follows Jack and Rose, two young people from very different social backgrounds who meet aboard the famous ocean liner. Their relationship develops while the ship moves toward one of the most famous disasters in history. The contrast between the luxurious world of the passengers and the rigid social expectations surrounding Rose gives the story additional depth. The film's enormous production design makes the Titanic feel remarkably alive before its tragic fate. James Cameron balances romance, adventure, drama, and historical spectacle throughout the story. The emotional conclusion leaves a lasting impression and has helped Titanic remain an important film for audiences around the world."
    },


    {
        id: 6,

        title: "The Prestige",

        year: 2006,

        genre: "Drama",

        rating: "8.5",

        image: "images/prestige.jpg",

        description:
            "Two rival magicians engage in a bitter battle of deception, obsession, and sacrifice.",

        blog:
            "The Prestige is a fascinating psychological drama about two magicians whose professional rivalry becomes increasingly dangerous. Robert Angier and Alfred Borden begin as friends and colleagues, but competition and tragedy turn them into bitter enemies. Each magician becomes obsessed with creating the ultimate illusion, leading both men to make increasingly extreme sacrifices. The movie is structured like a magic trick itself, carefully revealing information while encouraging the audience to question what they see. Themes of obsession, jealousy, ambition, sacrifice, and identity run throughout the story. Christopher Nolan creates an atmosphere filled with mystery and tension, while the performances make the rivalry believable. The final revelations encourage viewers to reconsider earlier scenes and watch the movie again."
    },


    {
        id: 7,

        title: "Jurassic Park",

        year: 1993,

        genre: "Adventure",

        rating: "8.2",

        image: "images/jurassic-park.jpg",

        description:
            "Scientists create a theme park filled with genetically engineered dinosaurs.",

        blog:
            "Jurassic Park remains one of the most memorable adventure movies ever made. The story begins when scientists successfully bring dinosaurs back to life using genetic engineering. A group of visitors arrives at a dinosaur theme park expecting an incredible experience, but a series of failures causes the creatures to escape. Steven Spielberg combines suspense, adventure, science fiction, and wonder to create a movie that appeals to audiences of different ages. The dinosaurs feel surprisingly realistic, especially considering the film's age. Scenes involving the Tyrannosaurus rex and velociraptors remain iconic. Beyond the spectacle, the movie also explores the dangers of uncontrolled scientific ambition and the consequences of trying to control nature."
    },


    {
        id: 8,

        title: "The Matrix",

        year: 1999,

        genre: "Sci-Fi",

        rating: "8.7",

        image: "images/matrix.jpg",

        description:
            "A computer hacker discovers that reality is not what it appears to be.",

        blog:
            "The Matrix is a groundbreaking science-fiction movie that questions the nature of reality and human freedom. Neo is a computer programmer who discovers that the world he knows is actually an artificial reality created by machines. After learning the truth, he joins a group of rebels fighting against the system. The movie combines philosophical ideas with innovative action sequences, creating a style that influenced many films that followed. Its visual effects, slow-motion action, futuristic world, and memorable characters became cultural landmarks. Beyond its entertainment value, The Matrix asks important questions about choice, control, identity, and reality. The journey of Neo from an uncertain programmer to someone who understands his potential gives the story its emotional foundation."
    }

];



/* =========================================
   VARIABLES
========================================= */

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


const movieGrid =
    document.getElementById("movieGrid");


const favoriteGrid =
    document.getElementById("favoriteGrid");


const blogGrid =
    document.getElementById("blogGrid");


const searchInput =
    document.getElementById("searchInput");


const genreFilter =
    document.getElementById("genreFilter");


const modal =
    document.getElementById("movieModal");


const closeModal =
    document.getElementById("closeModal");


const modalImage =
    document.getElementById("modalImage");


const modalTitle =
    document.getElementById("modalTitle");


const modalGenre =
    document.getElementById("modalGenre");


const modalYear =
    document.getElementById("modalYear");


const modalDescription =
    document.getElementById("modalDescription");


const modalBlog =
    document.getElementById("modalBlog");


const modalFavorite =
    document.getElementById("modalFavorite");


let selectedMovie = null;



/* =========================================
   IMAGE FALLBACK
========================================= */

function imageError(image, movieTitle) {

    image.onerror = null;

    image.src =
        "https://placehold.co/500x750/111111/ffffff?text=" +
        encodeURIComponent(movieTitle);

}



/* =========================================
   DISPLAY MOVIES
========================================= */

function displayMovies(movieList) {

    movieGrid.innerHTML = "";


    if (movieList.length === 0) {

        movieGrid.innerHTML = `

            <p class="empty-message">

                No movies found.

            </p>

        `;

        return;

    }


    movieList.forEach(movie => {


        const isFavorite =
            favorites.includes(movie.id);


        const card =
            document.createElement("div");


        card.className =
            "movie-card";


        card.innerHTML = `

            <img

                class="movie-image"

                src="${movie.image}"

                alt="${movie.title}"

                onerror="imageError(this, '${movie.title}')"

            >


            <div class="movie-info">


                <h3>
                    ${movie.title}
                </h3>


                <div class="movie-meta">

                    ${movie.year}
                    •
                    ${movie.genre}
                    •
                    ⭐ ${movie.rating}

                </div>


                <p class="movie-description">

                    ${movie.description}

                </p>


                <div class="card-actions">


                    <button

                        class="details-btn"

                        onclick="openMovie(${movie.id})">

                        Read Blog

                    </button>


                    <button

                        class="fav-btn
                        ${isFavorite ? "active" : ""}"

                        onclick="toggleFavorite(${movie.id}, event)">

                        ♥

                    </button>


                </div>


            </div>

        `;


        movieGrid.appendChild(card);


    });

}



/* =========================================
   DISPLAY BLOGS
========================================= */

function displayBlogs(movieList) {

    blogGrid.innerHTML = "";


    movieList.forEach((movie, index) => {


        const blogCard =
            document.createElement("article");


        blogCard.className =
            "blog-card";


        blogCard.innerHTML = `

            <div class="blog-number">

                ${String(index + 1).padStart(2, "0")}

            </div>


            <h3>

                ${movie.title}

            </h3>


            <p>

                ${movie.blog.substring(0, 180)}...

            </p>


            <span>

                ${movie.genre}
                •
                ${movie.year}

            </span>


            <br><br>


            <button

                class="details-btn"

                onclick="openMovie(${movie.id})">

                Read Full Blog

            </button>

        `;


        blogGrid.appendChild(blogCard);

    });

}



/* =========================================
   DISPLAY FAVORITES
========================================= */

function displayFavorites() {

    favoriteGrid.innerHTML = "";


    const favoriteMovies =
        movies.filter(movie =>
            favorites.includes(movie.id)
        );


    if (favoriteMovies.length === 0) {

        favoriteGrid.innerHTML = `

            <p class="empty-message">

                No favorite movies yet.
                Click ♥ to add one.

            </p>

        `;

        return;

    }


    favoriteMovies.forEach(movie => {


        const card =
            document.createElement("div");


        card.className =
            "movie-card";


        card.innerHTML = `

            <img

                class="movie-image"

                src="${movie.image}"

                alt="${movie.title}"

                onerror="imageError(this, '${movie.title}')"

            >


            <div class="movie-info">


                <h3>

                    ${movie.title}

                </h3>


                <div class="movie-meta">

                    ${movie.year}
                    •
                    ${movie.genre}
                    •
                    ⭐ ${movie.rating}

                </div>


                <div class="card-actions">


                    <button

                        class="details-btn"

                        onclick="openMovie(${movie.id})">

                        Read Blog

                    </button>


                    <button

                        class="fav-btn active"

                        onclick="toggleFavorite(${movie.id}, event)">

                        ♥

                    </button>


                </div>


            </div>

        `;


        favoriteGrid.appendChild(card);


    });

}



/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(id, event) {


    if (event) {

        event.stopPropagation();

    }


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                movieId => movieId !== id
            );

    }

    else {

        favorites.push(id);

    }


    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );


    displayMovies(
        getFilteredMovies()
    );


    displayFavorites();


    if (
        selectedMovie &&
        selectedMovie.id === id
    ) {

        updateModalFavorite();

    }

}



/* =========================================
   OPEN BLOG
========================================= */

function openMovie(id) {


    selectedMovie =
        movies.find(
            movie => movie.id === id
        );


    if (!selectedMovie) {

        return;

    }


    modalImage.src =
        selectedMovie.image;


    modalImage.onerror = function () {

        this.src =
            "https://placehold.co/500x750/111111/ffffff?text=" +
            encodeURIComponent(
                selectedMovie.title
            );

    };


    modalTitle.textContent =
        selectedMovie.title;


    modalGenre.textContent =
        selectedMovie.genre;


    modalYear.textContent =

        `${selectedMovie.year}
        •
        ⭐ ${selectedMovie.rating}`;


    modalDescription.textContent =
        selectedMovie.description;


    modalBlog.textContent =
        selectedMovie.blog;


    updateModalFavorite();


    modal.classList.add("show");

}



/* =========================================
   UPDATE FAVORITE BUTTON
========================================= */

function updateModalFavorite() {


    if (

        favorites.includes(
            selectedMovie.id
        )

    ) {

        modalFavorite.textContent =
            "Remove from Favorites";

    }

    else {

        modalFavorite.textContent =
            "Add to Favorites";

    }

}



/* =========================================
   MODAL FAVORITE
========================================= */

modalFavorite.addEventListener(

    "click",

    () => {


        if (selectedMovie) {

            toggleFavorite(
                selectedMovie.id
            );

        }

    }

);



/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener(

    "click",

    () => {

        modal.classList.remove("show");

    }

);


modal.addEventListener(

    "click",

    event => {


        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "show"
            );

        }

    }

);



/* =========================================
   SEARCH + FILTER
========================================= */

function getFilteredMovies() {


    const searchTerm =
        searchInput.value.toLowerCase();


    const selectedGenre =
        genreFilter.value;


    return movies.filter(movie => {


        const matchesSearch =

            movie.title
            .toLowerCase()
            .includes(searchTerm);


        const matchesGenre =

            selectedGenre === "all"

            ||

            movie.genre === selectedGenre;


        return (

            matchesSearch &&
            matchesGenre

        );

    });

}



function filterMovies() {


    const filteredMovies =
        getFilteredMovies();


    displayMovies(
        filteredMovies
    );


    displayBlogs(
        filteredMovies
    );

}



searchInput.addEventListener(

    "input",

    filterMovies

);


genreFilter.addEventListener(

    "change",

    filterMovies

);



/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


themeBtn.addEventListener(

    "click",

    () => {


        document.body.classList.toggle(
            "light"
        );


        if (

            document.body.classList.contains(
                "light"
            )

        ) {

            themeBtn.textContent =
                "🌙";

        }

        else {

            themeBtn.textContent =
                "☀";

        }

    }

);



/* =========================================
   INITIAL LOAD
========================================= */

displayMovies(movies);

displayBlogs(movies);

displayFavorites();