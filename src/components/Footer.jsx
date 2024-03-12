import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt="auto" py={4} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
