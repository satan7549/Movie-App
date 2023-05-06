import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import UpdateModal from "./UpdateModal";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/Movie/action";
import { NavLink } from "react-router-dom";

const MovieCard = ({
  _id,
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
  const toast = useToast();

  const removeMovie = (id) => {
    dispatch(deleteMovie(id));
    toast({
      title: "Movie Deleted.",
      description: `Successfully  Deleted ID:- ${id}`,
      status: "success",
      position: "top-right",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Card maxW="sm" >
      <CardBody >
        <NavLink to={`/movie/${_id}`}>
          <Stack mt="6" spacing="3" >
            <Image
              m={"auto"}
              h={"200px"}
              w={"95%"}
              src={image}
              alt={_id}
              borderRadius="lg"
              margin={"auto"}
            />

            <Box h={"50px"} overflowY={"hidden"}>
              <Heading size="md" textAlign={"center"}>
                {title}
              </Heading>
            </Box>
            <Flex direction={"column"} >
              <Text m={"auto"} as={"p"} fontSize={"lg"}>
                Director:-{" "}
                {director.length < 8 ? director : `${director.slice(0, 8)}...`}
              </Text>

              <Text m={"auto"} as={"p"} fontSize={"lg"}>
                Release:- {year}
              </Text>
              <Text m={"auto"} as={"p"} fontSize={"lg"}>
                Rating:- {rating}
              </Text>
            </Flex>
          </Stack>
        </NavLink>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          m={"auto"}
          width={"100%"}
          justifyContent={"space-between"}
          spacing="2"
        >
          <UpdateModal id={_id} />
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => removeMovie(_id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
