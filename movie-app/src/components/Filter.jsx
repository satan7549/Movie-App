import { Box, HStack, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/Movie/action";

const Filter = () => {
  const [sort, setSort] = useState("title");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies("", sort, 1));
  }, [sort]);

  return (
    <HStack m={"auto"}>

      <Box>
        <Select
          placeholder="Sort"
          bgColor={"teal.100"}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="director">Director</option>
          <option value="year">Year</option>
          <option value="genre">genre</option>
        </Select>
      </Box>
      {/* <Box>Sort</Box> */}
    </HStack>
  );
};

export default Filter;
