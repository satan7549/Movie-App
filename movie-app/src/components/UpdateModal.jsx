import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovie } from "../redux/Movie/action";

const UpdateModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(1);
  const [image, setImage] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();

  const dispatch = useDispatch();

  const update = () => {
    let newObj = {};
    if (title) {
      newObj.title = title;
    }
    if (image) {
      newObj.image = image;
    }
    if (director) {
      newObj.director = director;
    }
    if (year) {
      newObj.year = year;
    }
    if (rating) {
      newObj.ratings = rating;
    }
    dispatch(updateMovie(id, newObj));
    toast({
      title: "Movie Update.",
      description: `Successfully Movie Updated ID:- ${id}`,
      status: "success",
      position: "top-right",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button variant="solid" colorScheme="blue" onClick={onOpen}>
        Edit
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Movie Title</FormLabel>
              <Input
                ref={initialRef}
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Movie Title"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Director Name</FormLabel>
              <Input
                placeholder="Director Name"
                name="director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Release year</FormLabel>
              <Input
                type="number"
                placeholder="Year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ratings</FormLabel>
              <Select
                name={"rating"}
                placeholder="Select Rating"
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={update}>
              Save
            </Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
