import { Button, ButtonGroup, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/Movie/action";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { totalMovie, loading } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies("", "", page));
  }, [page]);

  return (
    <Container>
      <ButtonGroup margin={"auto"} py={4}>
        <Button
          isLoading={loading}
          isDisabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          isLoading={loading}
          isDisabled={page === Math.ceil(totalMovie / 4)}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Pagination;
