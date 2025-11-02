"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  HStack,
  Button,
} from "@chakra-ui/react";

const fonts = [
  {
    name: "Playfair Display",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700;800;900&display=swap",
  },
  {
    name: "Cormorant Garamond",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap",
  },
  {
    name: "Bodoni Moda",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,300;6..96,400;6..96,500;6..96,600;6..96,700;6..96,800;6..96,900&display=swap",
  },
  {
    name: "Lora",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Lora:wght@300;400;500;600;700&display=swap",
  },
  {
    name: "Raleway",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap",
  },
  {
    name: "Montserrat",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
  },
];

const accentColors = [
  { name: "Deep Navy", value: "#1e3a5f", light: "rgba(30, 58, 95, 0.15)", lighter: "rgba(30, 58, 95, 0.05)" },
  { name: "Sage Green", value: "#87a96b", light: "rgba(135, 169, 107, 0.15)", lighter: "rgba(135, 169, 107, 0.05)" },
  { name: "Dusty Rose", value: "#c88d8d", light: "rgba(200, 141, 141, 0.15)", lighter: "rgba(200, 141, 141, 0.05)" },
  { name: "Warm Beige", value: "#c4a88a", light: "rgba(196, 168, 138, 0.15)", lighter: "rgba(196, 168, 138, 0.05)" },
  { name: "Soft Lavender", value: "#a08fa5", light: "rgba(160, 143, 165, 0.15)", lighter: "rgba(160, 143, 165, 0.05)" },
  { name: "Charcoal", value: "#6b7280", light: "rgba(107, 114, 128, 0.15)", lighter: "rgba(107, 114, 128, 0.05)" },
];

export default function FontPreview() {
  const [selectedColor, setSelectedColor] = useState(() => accentColors[0]);

  useEffect(() => {
    // Load all font stylesheets
    fonts.forEach((font) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = font.googleFontsUrl;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Box minH="100vh" bg="white" _dark={{ bg: "black" }} p={8}>
      <Container maxW="6xl">
        <VStack gap={8} mb={12}>
          <Heading as="h1" fontSize="4xl" fontWeight="bold" color="black" _dark={{ color: "white" }} textAlign="center">
            Font Preview
          </Heading>
          
          {/* Color Chooser */}
          <Box>
            <Text mb={4} fontSize="sm" fontWeight="medium" color="gray.600" _dark={{ color: "gray.400" }} textAlign="center">
              Choose Accent Color
            </Text>
            <HStack gap={3} justify="center" flexWrap="wrap">
              {accentColors.map((color) => (
                <Button
                  key={color.name}
                  size="sm"
                  borderRadius="full"
                  variant={selectedColor.value === color.value ? "solid" : "outline"}
                  bg={selectedColor.value === color.value ? color.value : "transparent"}
                  color={selectedColor.value === color.value ? "white" : color.value}
                  borderColor={color.value}
                  borderWidth="2px"
                  _hover={{
                    bg: selectedColor.value === color.value ? color.value : `${color.value}10`,
                  }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color.name} color`}
                >
                  <HStack gap={2}>
                    <Box
                      w={4}
                      h={4}
                      borderRadius="full"
                      bg={color.value}
                      border="1px solid"
                      borderColor="gray.300"
                      _dark={{ borderColor: "gray.600" }}
                    />
                    <Text fontSize="xs">{color.name}</Text>
                  </HStack>
                </Button>
              ))}
            </HStack>
          </Box>
        </VStack>

        <Grid 
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)"
          }} 
          gap={{ base: 6, md: 8 }}
        >
          {fonts.map((font, index) => (
            <Box
              key={index}
              borderRadius="lg"
              border="2px"
              borderColor="gray.200"
              p={{ base: 10, md: 14 }}
              minH={{ base: "380px", md: "450px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              position="relative"
              overflow="hidden"
              w="100%"
              bg="gray.50"
              _dark={{ borderColor: "gray.800", bg: "gray.900" }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${selectedColor.light} 0%, ${selectedColor.lighter} 30%, transparent 70%)`,
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              <VStack gap={8} align="stretch" textAlign="center" position="relative" zIndex={1} px={2}>
                {/* Brand Name */}
                <Heading
                  as="h2"
                  fontSize={{ base: "5xl", md: "6xl" }}
                  fontWeight="300"
                  letterSpacing="0.08em"
                  color="black"
                  _dark={{ color: "white" }}
                  whiteSpace="nowrap"
                  lineHeight="1.2"
                  style={{ fontFamily: `'${font.name}', serif` }}
                >
                  unveil<Text as="span" color={selectedColor.value} _dark={{ color: selectedColor.value }}>
                    .skin
                  </Text>
                </Heading>

                {/* Product Line */}
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="700"
                  letterSpacing="0.15em"
                  color="black"
                  _dark={{ color: "white" }}
                  whiteSpace="nowrap"
                  style={{ fontFamily: `'${font.name}', serif` }}
                  textTransform="uppercase"
                >
                  ORDYN
                </Text>

                {/* Tagline */}
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="400"
                  lineHeight="relaxed"
                  color="gray.600"
                  _dark={{ color: "gray.200" }}
                  style={{ fontFamily: `'${font.name}', serif` }}
                >
                  Unveil Your Real Skin
                </Text>
              </VStack>

              {/* Font Name Label */}
              <Text
                mt={8}
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                _dark={{ color: "gray.500" }}
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                {font.name}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
