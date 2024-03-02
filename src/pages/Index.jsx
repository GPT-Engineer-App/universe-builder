import React from "react";
import { Box, Container, Flex, Heading, Text, Button, VStack, Grid, GridItem, Icon, useBreakpointValue, chakra, Spacer, Center } from "@chakra-ui/react";
import { FaMobileAlt, FaPaintBrush, FaCog, FaPlus } from "react-icons/fa";

const Feature = ({ title, icon, children }) => {
  return (
    <VStack spacing={3} textAlign="center">
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight="bold">{title}</Text>
      <Text color={"gray.600"}>{children}</Text>
    </VStack>
  );
};

const Index = () => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="header" width="full" align="center" justifyContent="space-between" p={4}>
        <Heading as="h1" size="lg">
          Universe
        </Heading>
        <Button leftIcon={<FaPlus />} size={buttonSize} colorScheme="teal">
          Create Site
        </Button>
      </Flex>

      {/* Hero Section */}
      <Center bg="gray.100" py={20}>
        <VStack spacing={4} as={Container} maxW="lg" textAlign="center">
          <Heading as="h2" size="xl">
            Build Your Site On The Go
          </Heading>
          <Text fontSize="lg" color={"gray.600"}>
            Universe is the simplest way to build a website from your phone!
          </Text>
          <Button size={buttonSize} colorScheme="teal">
            Get Started
          </Button>
        </VStack>
      </Center>

      {/* Features */}
      <Box py={20}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h3">Why Choose Universe?</Heading>
          <Text color={"gray.600"}>The ultimate tools to create a web presence</Text>
        </VStack>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6} py={10}>
          <GridItem>
            <Feature title="Mobile-First" icon={FaMobileAlt}>
              Build your site anytime, anywhere, right from your mobile device.
            </Feature>
          </GridItem>
          <GridItem>
            <Feature title="Easy Customizations" icon={FaPaintBrush}>
              Customize your site with easy-to-use design tools.
            </Feature>
          </GridItem>
          <GridItem>
            <Feature title="Powerful Settings" icon={FaCog}>
              Access advanced settings, without compromising simplicity.
            </Feature>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.200" py={10}>
        <Container as={Flex} maxW="lg" justify="center" flexDirection="column" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Universe. All rights reserved.</Text>
          <Spacer />
          <Text fontSize="sm">Built with love and React</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
