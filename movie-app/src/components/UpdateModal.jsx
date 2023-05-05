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
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovie } from "../redux/Movie/action";

const UpdateModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useDispatch();

  const update = () => {
    let newObj = {};
    if (title) {
      newObj.title = title;
    }
    if (director) {
      newObj.director = director;
    }
    dispatch(updateMovie(id, newObj));
  };

  /*
    "title": "zxc",
    "director": "asda",
    "year": "154",
    "genre": "djbh",
    "cast": "sdhd",
    "rating": "",
    "synopsis": "",
    "id": 1 
    */

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

            <FormControl mt={4}>
              <FormLabel>Director Name</FormLabel>
              <Input
                placeholder="Director Name"
                name="director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
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
