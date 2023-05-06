import React from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { Box } from "@chakra-ui/react";

const Movies = () => {
  return (
    <Box paddingTop={"100px"} display={"flex"} flexDir={"column"} gap={2}>
      <Filter />
      <MovieList />
      <Pagination />
    </Box>
  );
};

export default Movies;
