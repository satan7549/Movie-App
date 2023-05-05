import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import Error from "./Error";
import { getAllMovies } from "../redux/Movie/action";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { movies, loading, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <Grid
      paddingTop={"100px"}
      templateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(1, 1fr)",
      }}
      templateRows={"auto"}
      px={2}
      gap={6}
    >
      {movies.map((movie) => (
        <GridItem key={movie.id}>
          {/* <Link to={"/movie/:id"}> */}
          <MovieCard {...movie} />
          {/* </Link> */}
        </GridItem>
      ))}
    </Grid>
  );
};

export default MovieList;
