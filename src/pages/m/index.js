import { Catalogue } from "components/Catalogue";
import List from "components/List";
import { Navbar } from "components/Navbar";
import { Trends } from "components/Trends";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMovies } from "services/useMovies";

function index() {
  const { state, stateUpdaters } = useMovies();
  const { favoriteStatus } = state;
  const { addMovie, deleteMovie, findMovies } = stateUpdaters;

  return (
    <div className="w-full h-full pb-10 bg-black">
      <Head>
        <title>{"Movie Do"}</title>
        <meta name="og:site_name" content="Jeremy Mosquera" />
        <meta
          name="description"
          content="MovieDo is a web application with a netflix-like design that works with the TMDB (The Movie DataBase) API to pull popular movies, movies by category or even pull movies through a search, giving users information about their favorite movies and showing you a catalog of similar movies so you can continue browsing the website."
        ></meta>

        <meta itemProp="name" content="Movie Do" />
        <meta
          itemProp="description"
          content="MovieDo is a web application with a netflix-like design that works with the TMDB (The Movie DataBase) API to pull popular movies, movies by category or even pull movies through a search, giving users information about their favorite movies and showing you a catalog of similar movies so you can continue browsing the website."
        />
        <meta
          itemProp="image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331731/Portfolio/additionalImages/movieDo_e1pjul.png"
        />

        <meta property="og:url" content="https://movie-do.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Movie Do" />
        <meta
          name="og:description"
          content="MovieDo is a web application with a netflix-like design that works with the TMDB (The Movie DataBase) API to pull popular movies, movies by category or even pull movies through a search, giving users information about their favorite movies and showing you a catalog of similar movies so you can continue browsing the website."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331731/Portfolio/additionalImages/movieDo_e1pjul.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1250" />
        <meta property="og:image:height" content="940" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movie Do" />
        <meta
          name="twitter:description"
          content="MovieDo is a web application with a netflix-like design that works with the TMDB (The Movie DataBase) API to pull popular movies, movies by category or even pull movies through a search, giving users information about their favorite movies and showing you a catalog of similar movies so you can continue browsing the website."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331731/Portfolio/additionalImages/movieDo_e1pjul.png"
        />
      </Head>
      <Navbar />
      <div className="flex flex-col px-10 pt-20 overflow-hidden text-white">
        <Catalogue
          favoriteStatus={favoriteStatus}
          addMovie={addMovie}
          deleteMovie={deleteMovie}
          findMovies={findMovies}
        />
      </div>
    </div>
  );
}

export default index;
