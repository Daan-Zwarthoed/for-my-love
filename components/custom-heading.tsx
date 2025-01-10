import { Heading, HeadingProps, Text } from "@chakra-ui/react";

interface CustomHeadingProps extends HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export function CustomHeading({ children, type, ...rest }: CustomHeadingProps) {
  return (
    <Heading
      {...rest}
      as={type}
      size={type}
      textAlign="center"
      alignContent="left"
    >
      {children}
    </Heading>
  );
}
