import {
  ToastProviderProps,
  IconButton,
  Flex,
  Box,
  Text,
  Spacer,
} from "@chakra-ui/react";

export const customToastOptions: ToastProviderProps = {
  defaultOptions: {
    position: "top",
    duration: 5000,
    isClosable: true,
    render: ({ title, description }) => {
      return (
        <Flex
          position="relative"
          alignItems="center"
          justifyContent="center"
          color="white"
          w="full"
          bg="background"
          border="1px solid"
          borderColor="white"
          p={4}
          gap={4}
          textStyle="sm"
        >
          <Box>
            <Text textStyle="xl" fontWeight="bold">
              {title}
            </Text>
            <Text>{description}</Text>
          </Box>
        </Flex>
      );
    },
  },
};
