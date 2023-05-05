// import {
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Input,
// } from "@chakra-ui/react";
import React, { useState } from "react";
import "../style/Addform.css";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/Movie/action";
import { Container } from "@chakra-ui/react";

const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState("");
  const [rating, setRatings] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      image,
      director,
      year,
      genre,
      cast,
      rating,
      synopsis,
    };
    dispatch(addMovie(newMovie));

    setTitle("");
    setImage("");
    setDirector("");
    setYear("");
    setGenre("");
    setCast("");
    setSynopsis("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cast"
          value={cast}
          onChange={(e) => setCast(e.target.value)}
          required
        />
        <div>
          <label>Ratings:- </label>
          <select onChange={(e) => setRatings(e.target.value)} required>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div id="disp">
          <label>Synopsis</label>
          <textarea
            type="text"
            placeholder="Synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </Container>
  );
};

export default AddMovies;
