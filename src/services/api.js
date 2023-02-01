async function getTrendingMoviesPreview () {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + process.env.NEXT_PUBLIC_API_KEY);
    const data = await res.json();

    const movies = data.results;

    return movies;
}

export default getTrendingMoviesPreview;