import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HeadingProps,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CustomHeading } from "./custom-heading";
import { Confetti } from "./confetti";

export function Finale() {
  const toast = useToast();

  return (
    <Center
      alignItems="center"
      position="absolute"
      h="full"
      w="full"
      top={0}
      left={0}
      zIndex={2000}
      flexDirection="column"
      backdropFilter="blur(10px)"
      overflow="hidden"
      px={5}
    >
      <CustomHeading type="h1">Will you be my valentine?</CustomHeading>
      <Flex gap={4} mt={10}>
        <Button
          variant="secondary"
          onClick={() => {
            toast({ title: "Well fuck you then" });
          }}
        >
          NO
        </Button>
        <Confetti>
          <Button
            onClick={() => {
              toast({ title: "I LOVE YOU" });
            }}
            variant="primary"
          >
            YES
          </Button>
        </Confetti>
      </Flex>
    </Center>
  );
}
