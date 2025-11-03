"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Badge,
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon, WarningIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

const benefits = [
  {
    title: "Niacinamide-powered clarity",
    copy: "May help soften dark spots and post-acne marks while potentially refining the look of pores.",
  },
  {
    title: "Hydroquinone micro-dose complex",
    copy: "May help balance pigment pathways with a dermatologist-approved 0.75% encapsulated blend.",
  },
  {
    title: "Amino-protein base",
    copy: "May help cleanse with low-foam surfactants derived from silk proteins that may respect your barrier.",
  },
  {
    title: "Glycerin & aloe moisture lock",
    copy: "May help cushion skin with lasting hydration that may prevent a tight, squeaky finish.",
  },
  {
    title: "Balanced pH, daily-safe",
    copy: "Dermatologist calibrated at pH 5.5 for twice-daily use across face and body.",
  },
];

const howToUse = [
  "Moisten skin with lukewarm water.",
  "Massage the bar between your palms to activate the low-foam lather.",
  "Sweep over face and body for 60 seconds. Let the creamy lather sit on areas with discoloration for a few extra breaths.",
  "Rinse thoroughly and pat dry?no tugging.",
  "Follow with moisturiser and sunscreen in the AM.",
];

const dermNotes = [
  "Perform a patch test prior to first use, especially if you are new to brightening actives.",
  "Avoid direct contact with eyes. If contact occurs, rinse well with water.",
  "For compromised or freshly shaved skin, limit use to once a day until comfortable.",
];

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionGrid = motion(Grid);
const MotionStack = motion(Stack);

export default function SoapBarPage() {
  const [logoSrc, setLogoSrc] = useState("/Logo.svg"); // Default to light mode for SSR
  const resolvedLogoSrc = useColorModeValue("/Logo.svg", "/Logo_Dark.svg");
  
  useEffect(() => {
    // Update logo after hydration to match client theme
    setLogoSrc(resolvedLogoSrc);
  }, [resolvedLogoSrc]);
  
  return (
    <Box minH="100vh" bg="white" _dark={{ bg: "black" }}>
      {/* Header */}
      <Box as="header" borderBottom="1px" borderColor="gray.200" _dark={{ borderColor: "gray.800" }}>
        <Container maxW="7xl" px={6} py={6}>
          <Link href="/">
            <Image
              src={logoSrc}
              alt="unveil.skin"
              width={180}
              height={53}
              priority
              style={{ height: '32px', width: 'auto' }}
              className="h-8 w-auto"
            />
          </Link>
        </Container>
      </Box>

      {/* Product Content */}
      <Box as="main" maxW="7xl" mx="auto" px={6} py={{ base: 12, md: 16 }}>
        {/* Back Link */}
        <Link href="/">
          <HStack
            mb={8}
            gap={2}
            color="gray.700"
            _dark={{ color: "gray.300" }}
            _hover={{ color: "black", _dark: { color: "white" } }}
            transition="color 0.2s"
          >
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: "inline-block" }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <Text fontSize="sm">Back to products</Text>
          </HStack>
        </Link>

        {/* Product Grid */}
        <MotionGrid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={{ base: 12, lg: 16 }}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Product Image */}
          <MotionBox
            position="relative"
            aspectRatio={1}
            overflow="hidden"
            borderRadius="lg"
            bg="gray.50"
            _dark={{ bg: "gray.900" }}
            variants={itemVariants}
          >
            <Image
              src="/Soap_bar.png"
              alt="Ordyn soap bar"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </MotionBox>

          {/* Product Details */}
          <MotionVStack
            align="stretch"
            justify="center"
            gap={8}
            variants={itemVariants}
          >
            <Stack gap={3}>
              <Badge
                alignSelf="flex-start"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="xs"
                fontWeight="semibold"
                letterSpacing="wider"
                textTransform="uppercase"
                colorScheme="orange"
              >
                Clarifying cleanse
              </Badge>
              <Stack gap={2}>
                <Text fontSize="sm" fontWeight="medium" color="gray.600" _dark={{ color: "gray.400" }}>
                  ORDYN
                </Text>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  fontWeight="bold"
                  letterSpacing="tight"
                  color="black"
                  _dark={{ color: "white" }}
                >
                  Soap Bar
                </Heading>
              </Stack>
            </Stack>

            <Stack gap={4}>
              <Text fontSize="lg" lineHeight="1.7" color="gray.600" _dark={{ color: "gray.200" }}>
                A cushiony, fragrance-light bar that may help dissolve city buildup and dullness while potentially strengthening your barrier. Dermatologist-designed for Indian climates and balanced at pH 5.5 so your skin may never feel stripped.
              </Text>
              <Text fontSize="md" lineHeight="1.7" color="gray.700" _dark={{ color: "gray.300" }}>
                Powered by niacinamide, a hydroquinone micro-dose complex, and a silky amino-protein base, ORDYN Soap Bar may help gently brighten, potentially calm breakouts, and may leave skin soft to the touch. Use it from face to shoulders to potentially unclog, even tone, and prep skin for your next steps.
              </Text>
            </Stack>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="semibold"
                mb={6}
                color="black"
                _dark={{ color: "white" }}
              >
                What makes it work
              </Heading>
              <MotionVStack
                align="stretch"
                gap={5}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
              >
                {benefits.map((benefit) => (
                  <MotionBox key={benefit.title} variants={itemVariants}>
                    <Heading as="h3" fontSize="md" fontWeight="semibold" color="black" _dark={{ color: "white" }} mb={1}>
                      {benefit.title}
                    </Heading>
                    <Text fontSize="sm" lineHeight="1.7" color="gray.600" _dark={{ color: "gray.300" }}>
                      {benefit.copy}
                    </Text>
                  </MotionBox>
                ))}
              </MotionVStack>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              <MotionStack
                bg="gray.50"
                borderRadius="xl"
                border="1px"
                borderColor="gray.200"
                _dark={{ bg: "gray.900", borderColor: "gray.800" }}
                p={6}
                gap={5}
                variants={itemVariants}
              >
                <HStack gap={3}>
                  <InfoOutlineIcon color="orange.400" boxSize={5} />
                  <Heading as="h2" fontSize="md" fontWeight="semibold">
                    How to use
                  </Heading>
                </HStack>
                <Stack as="ol" gap={3} m={0} p={0} listStyleType="none">
                  {howToUse.map((step, index) => (
                    <HStack as="li" key={step} align="flex-start" gap={3}>
                      <Badge
                        borderRadius="full"
                        px={2}
                        py={1}
                        fontSize="xs"
                        colorScheme="blackAlpha"
                      >
                        {index + 1}
                      </Badge>
                      <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.200" }}>
                        {step}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </MotionStack>

              <MotionStack
                bg="white"
                borderRadius="xl"
                border="1px"
                borderColor="gray.200"
                _dark={{ bg: "gray.950", borderColor: "gray.800" }}
                p={6}
                gap={4}
                variants={itemVariants}
              >
                <HStack gap={3}>
                  <WarningIcon color="red.400" boxSize={5} />
                  <Heading as="h2" fontSize="md" fontWeight="semibold">
                    Dermatologist notes
                  </Heading>
                </HStack>
                <Stack as="ul" gap={3} listStyleType="none" m={0} p={0}>
                  {dermNotes.map((note) => (
                    <HStack as="li" key={note} align="flex-start" gap={3}>
                      <Icon as={CheckIcon} color="#c88d8d" mt={1} boxSize={4} />
                      <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.200" }}>
                        {note}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
                <Separator borderColor="gray.200" _dark={{ borderColor: "gray.800" }} />
                <Text fontSize="xs" color="gray.500" _dark={{ color: "gray.400" }}>
                  Cosmetic product. Not a medicinal drug. Consult your dermatologist if you&apos;re on prescription exfoliants.
                </Text>
              </MotionStack>
            </SimpleGrid>

            <MotionStack
              borderRadius="xl"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
              _dark={{ borderColor: "gray.800", bg: "gray.900" }}
              p={6}
              gap={3}
              variants={itemVariants}
            >
              <HStack gap={2}>
                <Box
                  h={2}
                  w={2}
                  borderRadius="full"
                  className="bg-zinc-400 dark:bg-zinc-600 animate-pulse"
                />
                <Text fontSize="sm" fontWeight="medium" color="gray.600" _dark={{ color: "gray.200" }}>
                  Coming soon
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.300" }}>
                ORDYN Soap Bar launches in 2025. Join the waitlist on the homepage for first access and dermatologist-led routines.
              </Text>
            </MotionStack>
          </MotionVStack>
        </MotionGrid>
      </Box>
    </Box>
  );
}
