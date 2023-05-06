import React, { useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/Movie/action";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies(query, "", 1));
  }, [query]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <SearchIcon fontSize="xl" color="rgb(1, 75, 97)" onClick={onOpen} />
      <Drawer placement="top" onClose={handleClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt="50px" p="10px">
          <DrawerBody gap={2}>
            <InputGroup>
              <Input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Movie..."
              />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search database"
                    color={"rgb(1, 75, 97)"}
                    bg="none"
                    onClick={() => setQuery(query)}
                    icon={<SearchIcon />}
                  />
                }
              />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
