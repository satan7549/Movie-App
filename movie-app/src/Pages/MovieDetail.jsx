import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMovies } from "../redux/Movie/action";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

const MovieDetail = () => {
  const { singleMovie, loading, error } = useSelector((store) => store);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { _id, title, image, director, ratings, genre, cast, synopsis } =
    singleMovie;

  useEffect(() => {
    dispatch(getSingleMovies(id));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Card
      mt={"100px"}
      direction={{ base: "column", sm: "row" }}
      p={4}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px", md: "50%" }}
        src={image}
        alt={_id}
      />

      <CardBody>
        <Heading size="md">Title:- {title}</Heading>
        <Text
          as={"p"}
          fontSize={{ lg: "3xl", md: "2xl", sm: "lg", base: "lg" }}
        >
          Director:- {director}
        </Text>
        <Text
          as={"p"}
          fontSize={{ lg: "3xl", md: "2xl", sm: "lg", base: "lg" }}
        >
          Ratings:- {ratings}
        </Text>
        <Text
          as={"p"}
          fontSize={{ lg: "3xl", md: "2xl", sm: "lg", base: "lg" }}
        >
          Genre:- {genre}
        </Text>
        <Text
          as={"p"}
          fontSize={{ lg: "3xl", md: "2xl", sm: "lg", base: "lg" }}
        >
          Cast:- {cast}
        </Text>
        <Text py="2" fontSize={{ lg: "3xl", md: "2xl", sm: "lg", base: "lg" }}>
          {synopsis}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieDetail;
