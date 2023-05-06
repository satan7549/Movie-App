import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/Movie/action";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";

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
    <Box>
      <Container maxW="xl" mt={"100px"} p={4} boxShadow={"2xl"}>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="image" isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              {image && (
                <Image
                  w={"100px"}
                  h={"200px"}
                  src={image}
                  alt="movie poster"
                  mt="2"
                />
              )}
            </FormControl>
            <FormControl id="director" isRequired>
              <FormLabel>Director</FormLabel>
              <Input
                type="text"
                placeholder="Enter director name"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </FormControl>
            <FormControl id="year" isRequired>
              <FormLabel>Year</FormLabel>
              <Input
                type="number"
                placeholder="Enter year of release"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </FormControl>
            <FormControl id="genre" isRequired>
              <FormLabel>Genre</FormLabel>
              <Input
                type="text"
                placeholder="Enter genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </FormControl>
            <FormControl id="cast" isRequired>
              <FormLabel>Cast</FormLabel>
              <Textarea
                type="text"
                placeholder="Enter cast"
                value={cast}
                onChange={(e) => setCast(e.target.value)}
              />
            </FormControl>
            <FormControl id="ratings" isRequired>
              <FormLabel>Ratings</FormLabel>
              <Select onChange={(e) => setRatings(e.target.value)}>
                <option value="" disabled>
                  Select rating
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Select>
            </FormControl>
            <FormControl id="synopsis" isRequired>
              <FormLabel>Synopsis</FormLabel>
              <Textarea
                placeholder="Synopsis"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                size="sm"
                resize="none"
              />
            </FormControl>
          </Stack>
          <Input type="submit" bgColor={"teal"} value={"Add Movie"} />
        </form>
      </Container>
    </Box>
  );
};

export default AddMovies;
