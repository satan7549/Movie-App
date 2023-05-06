import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Skeleton,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Skeleton borderRadius="lg" margin={"auto"} h={"200px"} w={"90%"} />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            <Skeleton height="20px" />
          </Heading>
          <Wrap>
            <WrapItem>
              <Skeleton />
            </WrapItem>
            <WrapItem>
              <Skeleton />
            </WrapItem>
            <WrapItem>
              <Skeleton />
            </WrapItem>

            <WrapItem>
              <Skeleton />
            </WrapItem>

            <WrapItem>
              <Skeleton />
            </WrapItem>
          </Wrap>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          m={"auto"}
          width={"100%"}
          justifyContent={"space-between"}
          spacing="2"
        >
          <Skeleton />
          <Button  >
            <Skeleton />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Loading;
