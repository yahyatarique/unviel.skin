"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon, EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
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
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

const floatInPlace = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const heroHighlights = [
  "Dermatologist-developed actives tuned for humid, city climates",
  "pH 5.5 cleansing that respects your barrier",
  "Invisible SPF that shields against sun, heat, and pollution",
];

const aboutPillars = [
  {
    title: "Simplicity with science",
    copy: "We obsess over essential actives in optimal percentages so every product earns its place on your sink.",
  },
  {
    title: "Human, not hype",
    copy: "Texture, scent, and wearability matter as much as efficacy. ORDYN feels gentle, never performative.",
  },
  {
    title: "Built for real life",
    copy: "Tested across varied Indian skin tones and routines so your skin looks like itself—only clearer, calmer, steadier.",
  },
];

const productCards = [
  {
    name: "Ordyn Soap Bar",
    slug: "/products/soap-bar",
    image: "/Soap_bar.png",
    alt: "Ordyn soap bar",
    ribbon: "Clarifying Cleanse",
    summary:
      "Amino-acid surfactants lift buildup while niacinamide and a micro-dose brightening complex fade dullness without disrupting your barrier.",
    benefits: [
      "Balances skin flora with amino-protein base and prebiotic humectants",
      "Visibly refines tone with niacinamide + hydroquinone micro-dose complex",
      "Cools and comforts with glycerin, aloe, and vitamin B5",
    ],
    feel: "Low-foam, cushiony lather",
  },
  {
    name: "Ordyn Daily Sunscreen",
    slug: "/products/sunscreen",
    image: "/Sunscreen.png",
    alt: "Ordyn daily sunscreen",
    ribbon: "Invisible SPF 50 PA+++",
    summary:
      "Serum-light shield delivers broad-spectrum UV/IR/blue light defense with niacinamide, ceramides, and antioxidants for glow minus the grease.",
    benefits: [
      "Zero white cast with UV filters that melt into every tone",
      "Hydrates and strengthens with niacinamide, hyaluronic complex, and ceramides",
      "Sets to a breathable satin finish under makeup or on bare skin",
    ],
    feel: "Featherlight serum-cream",
  },
];

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionVStack = motion(VStack);
const MotionFlex = motion(Flex);

export default function Home() {
  return (
    <Box minH="100vh" className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <Box as="header" borderBottom="1px" className="border-zinc-200 dark:border-zinc-800">
        <Container maxW="7xl" px={{ base: 4, md: 6 }} py={6}>
          <Heading
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="tight"
            className="text-black dark:text-white"
          >
            unveil<Text as="span" className="text-zinc-400 dark:text-zinc-600">
              .skin
            </Text>
          </Heading>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="main" maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 12, md: 20 }}>
        <MotionBox
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 16 }}
          className="bg-white/80 backdrop-blur-xl shadow-[0_40px_120px_-60px] shadow-zinc-400/40 dark:bg-zinc-950/70 dark:shadow-[0_40px_120px_-60px] dark:shadow-black"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Box
            position="absolute"
            inset={0}
            pointerEvents="none"
            opacity={0.6}
            className="bg-[radial-gradient(circle_at_top,_rgba(252,231,206,0.55),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_60%)]"
          />
          <MotionBox
            position="absolute"
            top={-24}
            right={{ base: -10, md: -24 }}
            w={{ base: "48", md: "64" }}
            h={{ base: "48", md: "64" }}
            borderRadius="full"
            className="bg-amber-200/40 dark:bg-purple-700/20"
            filter="blur(60px)"
            variants={floatInPlace}
            animate="animate"
          />

          <MotionSimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 10, md: 16 }}
            position="relative"
            zIndex={1}
            alignItems="center"
          >
            <MotionStack gap={{ base: 6, md: 8 }} variants={containerVariants}>
              <MotionStack gap={{ base: 3, md: 4 }} variants={itemVariants}>
                <Badge
                  alignSelf="flex-start"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  className="bg-amber-100 text-amber-800 dark:bg-purple-900/50 dark:text-purple-200"
                >
                  Ordyn by unveil.skin
                </Badge>
                <Heading
                  as="h2"
                  fontSize={{ base: "3.5xl", sm: "4xl", md: "5xl" }}
                  lineHeight="1.1"
                  fontWeight="bold"
                  letterSpacing="tight"
                  className="text-black dark:text-white"
                >
                  Unveil Your Real Skin
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="1.7"
                  className="text-zinc-600 dark:text-zinc-300"
                >
                  Dermatologist-guided essentials that keep skin clear, calm, and future-proof. Just two daily steps—clarify with the Ordyn Soap Bar, defend with the Ordyn Daily Sunscreen.
                </Text>
              </MotionStack>

              <MotionBox variants={itemVariants}>
                <Stack as="ul" gap={3} listStyleType="none" m={0} p={0}>
                  {heroHighlights.map((highlight) => (
                    <HStack as="li" key={highlight} align="flex-start" gap={3}>
                      <Icon as={CheckIcon} color="green.500" mt={1} boxSize={4} />
                      <Text fontSize="sm" className="text-zinc-600 dark:text-zinc-300">
                        {highlight}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </MotionBox>

              <MotionStack gap={6} variants={itemVariants}>
                <Stack direction={{ base: "column", sm: "row" }} gap={4} align={{ base: "stretch", sm: "center" }}>
                  <WaitlistForm />
                  <Link href="#products">
                    <Button
                      borderRadius="full"
                      px={8}
                      h={12}
                      className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Explore Ordyn
                    </Button>
                  </Link>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 8 }}>
                  <Stack gap={1}>
                    <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" className="text-zinc-500 dark:text-zinc-400">
                      Clinical clarity
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" className="text-zinc-700 dark:text-zinc-200">
                      92% noticed brighter skin without dryness*
                    </Text>
                  </Stack>
                  <Separator display={{ base: "none", md: "block" }} orientation="vertical" borderColor="gray.200" _dark={{ borderColor: "gray.800" }} />
                  <Stack gap={1}>
                    <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" className="text-zinc-500 dark:text-zinc-400">
                      Everyday wear
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" className="text-zinc-700 dark:text-zinc-200">
                      Sweat-resistant, fragrance-light, makeup-friendly
                    </Text>
                  </Stack>
                </Stack>
                <Text fontSize="xs" className="text-zinc-400 dark:text-zinc-500">
                  *32-person self-evaluation after 6 weeks of continuous use.
                </Text>
              </MotionStack>
            </MotionStack>

            <MotionFlex
              position="relative"
              align="center"
              justify="center"
              variants={itemVariants}
            >
              <MotionBox
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                h={{ base: "360px", md: "460px" }}
                w="full"
                maxW="360px"
                className="bg-gradient-to-br from-amber-100 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
                boxShadow="0px 40px 80px -40px rgba(15, 23, 42, 0.35)"
              >
                <Image
                  src="/Sunscreen.png"
                  alt="Ordyn daily sunscreen"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 80vw, 360px"
                  priority
                />
              </MotionBox>

              <MotionBox
                position="absolute"
                bottom={-10}
                left={{ base: "-10", sm: "-12" }}
                borderRadius="2xl"
                overflow="hidden"
                w={{ base: "160px", sm: "200px" }}
                h={{ base: "160px", sm: "200px" }}
                className="bg-gradient-to-tr from-white to-amber-50 dark:from-zinc-950 dark:to-zinc-900"
                boxShadow="0px 24px 50px -30px rgba(15, 23, 42, 0.35)"
                variants={floatInPlace}
                animate="animate"
              >
                <Image
                  src="/Soap_bar.png"
                  alt="Ordyn soap bar"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 40vw, 200px"
                />
              </MotionBox>

              <MotionBox
                position="absolute"
                top={6}
                right={{ base: -2, sm: -8 }}
                borderRadius="xl"
                px={5}
                py={3}
                className="bg-black/80 backdrop-blur text-white"
                fontSize="sm"
                variants={floatInPlace}
                animate="animate"
              >
                Dermatologist guided • Cruelty free • Vegan
              </MotionBox>
            </MotionFlex>
          </MotionSimpleGrid>
        </MotionBox>

        {/* About / Philosophy Section */}
        <MotionBox
          mt={{ base: 16, md: 24 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Stack maxW="3xl" mx="auto" textAlign="center" gap={4}>
            <Badge
              alignSelf="center"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wider"
              textTransform="uppercase"
              className="bg-zinc-200/60 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
            >
              Our Philosophy
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "2.5xl", md: "3xl" }}
              fontWeight="semibold"
              className="text-black dark:text-white"
            >
              Quiet formulas. Loud results.
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" className="text-zinc-600 dark:text-zinc-300">
              unveil<Text as="span" className="text-zinc-400">.skin</Text> was created to bridge clinical efficacy and sensorial ease. No ten-step routines, no harsh exfoliants—just considered essentials that make your skin feel like home.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }} mt={{ base: 10, md: 14 }}>
            {aboutPillars.map((pillar) => (
              <MotionBox
                key={pillar.title}
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                className="bg-white/80 dark:bg-zinc-950/70 border border-zinc-200/60 dark:border-zinc-800/60"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Heading as="h3" fontSize="lg" fontWeight="semibold" mb={3} className="text-black dark:text-white">
                  {pillar.title}
                </Heading>
                <Text fontSize="sm" lineHeight="1.7" className="text-zinc-600 dark:text-zinc-300">
                  {pillar.copy}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Product Section */}
        <MotionBox
          id="products"
          mt={{ base: 20, md: 28 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          <MotionStack gap={4} align="center" textAlign="center" variants={itemVariants}>
            <Badge
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wider"
              textTransform="uppercase"
              className="bg-zinc-200/70 text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
            >
              The Ordyn System
            </Badge>
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" className="text-black dark:text-white">
              Two essentials. One ritual.
            </Heading>
            <Text maxW="2xl" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" className="text-zinc-600 dark:text-zinc-300">
              Layer ORDYN in the morning and night for clarity that lasts. Keep it on display—these are the products you reach for every single day.
            </Text>
          </MotionStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, md: 14 }} mt={{ base: 12, md: 16 }}>
            {productCards.map((product, index) => (
              <MotionBox
                key={product.name}
                borderRadius="3xl"
                overflow="hidden"
                className="bg-white/85 dark:bg-zinc-950/80 border border-zinc-200/60 dark:border-zinc-800/60"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <Box position="relative" h={{ base: "230px", md: "260px" }}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority={index === 0}
                  />
                  <Badge
                    position="absolute"
                    top={5}
                    left={5}
                    borderRadius="full"
                    px={3}
                    py={1}
                    fontSize="xs"
                    fontWeight="medium"
                    className="bg-black/80 text-white"
                  >
                    {product.ribbon}
                  </Badge>
                </Box>
                <Stack p={{ base: 6, md: 8 }} gap={5}>
                  <Stack gap={2}>
                    <Heading as="h3" fontSize={{ base: "2xl", md: "2.5xl" }} fontWeight="semibold" className="text-black dark:text-white">
                      {product.name}
                    </Heading>
                    <Text fontSize="md" lineHeight="1.7" className="text-zinc-600 dark:text-zinc-300">
                      {product.summary}
                    </Text>
                  </Stack>
                  <Stack as="ul" gap={3} listStyleType="none" m={0} p={0}>
                    {product.benefits.map((benefit) => (
                      <HStack as="li" key={benefit} align="flex-start" gap={3}>
                        <Icon as={CheckIcon} color="green.500" mt={1} boxSize={4} />
                        <Text fontSize="sm" className="text-zinc-600 dark:text-zinc-300">
                          {benefit}
                        </Text>
                      </HStack>
                    ))}
                  </Stack>
                  <Box>
                    <Text fontSize="xs" letterSpacing="wider" textTransform="uppercase" className="text-zinc-400 dark:text-zinc-500">
                      How it feels
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" className="text-zinc-700 dark:text-zinc-200">
                      {product.feel}
                    </Text>
                  </Box>
                  <Separator borderColor="gray.200" _dark={{ borderColor: "gray.800" }} />
                  <Stack direction={{ base: "column", sm: "row" }} gap={4} align={{ base: "flex-start", sm: "center" }}>
                    <Link href={product.slug}>
                      <Button
                        borderRadius="full"
                        px={6}
                        className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                      >
                        <HStack gap={2}>
                          <Text>View full story</Text>
                          <ExternalLinkIcon />
                        </HStack>
                      </Button>
                    </Link>
                    <Text fontSize="xs" className="text-zinc-400 dark:text-zinc-500">
                      Dermatologist reviewed • Coming soon
                    </Text>
                  </Stack>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Launch Notice */}
        <MotionBox
          mt={{ base: 16, md: 20 }}
          borderRadius="2xl"
          px={{ base: 6, md: 10 }}
          py={{ base: 6, md: 8 }}
          className="bg-zinc-100/80 text-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 border border-dashed border-zinc-300 dark:border-zinc-700"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
        >
          <HStack gap={3} align="flex-start">
            <Box
              h={2}
              w={2}
              borderRadius="full"
              className="bg-emerald-500 animate-pulse"
              mt={2}
            />
            <Stack gap={1}>
              <Text fontSize="sm" fontWeight="semibold">
                Next in the lab: gentle face wash & adaptive moisturizer.
              </Text>
              <Text fontSize="xs">
                Sign up above to be first in line. We respect your inbox—one meaningful update at a time.
              </Text>
            </Stack>
          </HStack>
        </MotionBox>
      </Box>

      {/* Footer */}
      <MotionBox as="footer" borderTop="1px" className="border-zinc-200 dark:border-zinc-800" py={{ base: 10, md: 14 }}>
        <Container maxW="7xl" px={{ base: 4, md: 6 }}>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: 8, md: 10 }}>
            <Stack gap={3}>
              <Heading as="h3" fontSize="lg" fontWeight="bold" className="text-black dark:text-white">
                unveil<Text as="span" className="text-zinc-400 dark:text-zinc-600">.skin</Text>
              </Heading>
              <Text fontSize="sm" className="text-zinc-600 dark:text-zinc-400">
                Formulated and crafted in India. Dermatologist-guided, clinically vetted, and mindful of the planet.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" className="text-zinc-500 dark:text-zinc-400">
                Manufactured by
              </Text>
              <Text fontSize="sm" className="text-zinc-700 dark:text-zinc-300">
                Unveil Labs Pvt. Ltd.
                <br />Plot 18, Sector 18, Navi Mumbai, MH 400703
              </Text>
            </Stack>
            <Stack gap={2}>
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" className="text-zinc-500 dark:text-zinc-400">
                Marketed by
              </Text>
              <Text fontSize="sm" className="text-zinc-700 dark:text-zinc-300">
                Ordyn Co. (India)
                <br />F-204, Koramangala, Bengaluru, KA 560034
              </Text>
            </Stack>
            <Stack gap={3}>
              <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" className="text-zinc-500 dark:text-zinc-400">
                Contact
              </Text>
              <Stack gap={3}>
                <HStack gap={3}>
                  <EmailIcon boxSize={4} />
                  <Link href="mailto:hello@unveil.skin">
                    <Text fontSize="sm" className="text-zinc-700 dark:text-zinc-300 underline-offset-4 hover:underline">
                      hello@unveil.skin
                    </Text>
                  </Link>
                </HStack>
                <HStack gap={3}>
                  <PhoneIcon boxSize={4} />
                  <Text fontSize="sm" className="text-zinc-700 dark:text-zinc-300">
                    +91 80 0000 0000
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </SimpleGrid>
          <Separator my={{ base: 8, md: 10 }} borderColor="gray.200" _dark={{ borderColor: "gray.800" }} />
          <Stack direction={{ base: "column", md: "row" }} justify="space-between" gap={4}>
            <Text fontSize="xs" className="text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} Unveil Labs Pvt. Ltd. All rights reserved.
            </Text>
            <Text fontSize="xs" className="text-zinc-400 dark:text-zinc-500">
              *Products are cosmetic formulations. Not a substitute for medical advice.
            </Text>
          </Stack>
        </Container>
      </MotionBox>
    </Box>
  );
}
