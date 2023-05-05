import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import UpdateModal from "./UpdateModal";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/Movie/action";

const MovieCard = ({
  id,
  title,
  image,
  director,
  year,
  genre,
  cast,
  rating,
  synopsis,
}) => {
  const dispatch = useDispatch();

  const removeMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={id} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Wrap>
            <WrapItem>
              <Text>Director:- {director}</Text>
            </WrapItem>
            <WrapItem>
              <Text>Release:- {year}</Text>
            </WrapItem>
            <WrapItem>
              <Text>Genre:- {genre}</Text>
            </WrapItem>

            <WrapItem>
              <Text>Cast:- {cast}</Text>
            </WrapItem>

            <WrapItem>
              <Text>Rating:- {rating}</Text>
            </WrapItem>
          </Wrap>
          <Box h={"100px"}>
            <Text>Synopsis:- {synopsis}</Text>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <UpdateModal id={id} />
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => removeMovie(id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
