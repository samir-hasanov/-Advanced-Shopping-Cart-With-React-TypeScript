import React from "react";
import { Box, Divider, Flex, Img, Link, Text } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import store from "../assets/store.png";

const Footer = () => {
  return (
    <Box px={130} py={10} bg="skyblue">
      <Flex justify="space-between" alignItems="center">
        <Img src={store} alt="Icon" style={{ width: 50, height: 50 }} />
      </Flex>
      <Flex justify="space-between" alignItems={"center"}>
        <Text as="b" fontSize="15px" mt={20}>
          COPYRIGHTED BY SAMIR HASANOV 2023 © STORE
        </Text>
        <Flex columnGap={10} alignItems="center">
          <Link href="#" _hover={{ color: "red" }}>
            <FaFacebookF />
          </Link>
          <Link href="#" _hover={{ color: "red" }}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
