const express = require('express'); // load express framework
const axios = require('axios'); // To call OMDb API
const cors = require('cors'); // to allow angular to connect with node
require('dotenv').config(); // loads .env variables

const app = express();

app.use(cors());
app.use(express.json());

app.get("/movie/:id", function(req, res) {

    const movieId = req.params.id;

    axios.get(`http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${process.env.OMDB_API_KEY}`)

    .then(function(response) {

        const movie = response.data;

        // Handle movie not found
        if (movie.Response === "False") {
            return res.status(404).json({
                message: movie.Error
            });
        }

        const rating = parseFloat(movie.imdbRating) || 0;

        let sentiment;
        let summary;

        if (rating >= 7) {
            sentiment = "Positive";
            summary = "Audience response is generally positive with strong appreciation for the movie.";
        }
        else if (rating >= 5) {
            sentiment = "Mixed";
            summary = "Audience reactions are mixed with both positive and negative feedback.";
        }
        else {
            sentiment = "Negative";
            summary = "Audience response is largely negative and the movie received poor reviews.";
        }

        res.json({
            title: movie.Title,
            year: movie.Year,
            actors: movie.Actors,
            plot: movie.Plot,
            rating: movie.imdbRating,
            poster: movie.Poster,
            sentiment: sentiment,
            sentimentSummary: summary
        });

    })

    .catch(function(err) {

        res.status(500).json({
            message: "Error fetching movie"
        });

    });

});

app.listen(5000, function() {
    console.log("Server running on port 5000");
});