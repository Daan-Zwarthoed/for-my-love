import { Box, BoxProps, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import { Finale } from "../components/finale";
import { CustomHeading } from "../components/custom-heading";
import { CloseIcon } from "@chakra-ui/icons";

const SIZE = 10;

const CARDS = [
  {
    top: 900,
    left: 500,
    text: "For my love",
  },
  {
    top: 800,
    left: 600,
    text: "The sweetest girlfriend",
  },
  {
    top: 700,
    left: 700,
    text: "My gorgeous gorgeous",
  },
  {
    top: 600,
    left: 800,
    text: "The light of my life",
  },
  {
    top: 500,
    left: 850,
    text: "My little weirdo",
  },
  {
    top: 400,
    left: 900,
    text: "My proudest achievement",
  },
  {
    top: 300,
    left: 930,
    text: "A cold drink on a hot summer day",
  },
  {
    top: 200,
    left: 900,
    text: "My better half",
  },
  {
    top: 100,
    left: 800,
    text: "My soulmate",
  },
  {
    top: 100,
    left: 700,
    text: "The light at the end of the tunnel",
  },
  {
    top: 180,
    left: 600,
    text: "My comedian",
  },
  {
    top: 280,
    left: 500,
    text: "The one who brings me peace when I can't find any",
  },
  {
    top: 180,
    left: 400,
    text: "A gem of a person",
  },
  {
    top: 100,
    left: 300,
    text: "The one I am grateful for every day",
  },
  {
    top: 100,
    left: 200,
    text: "My dearest",
  },
  {
    top: 200,
    left: 100,
    text: "The yapper of my heart",
  },
  {
    top: 300,
    left: 70,
    text: "My favourite notification",
  },
  {
    top: 400,
    left: 100,
    text: "My princess",
  },
  {
    top: 500,
    left: 150,
    text: "My forever person",
  },
  {
    top: 600,
    left: 200,
    text: "I'm never going to meet another you",
  },
  {
    top: 700,
    left: 300,
    text: "I love you ❤️",
  },
  {
    top: 800,
    left: 400,
    text: "I have a question for you.",
  },
];

interface CardProps extends BoxProps {
  children: ReactNode;
  top: number;
  left: number;
  addDescription?: boolean;
}

const Card = ({ children, top, left, addDescription, ...rest }: CardProps) => {
  return (
    <Flex
      position="absolute"
      h="100vh"
      w="100vw"
      bg="primary"
      left={`${left}vw`}
      top={`${top}vh`}
      transform="translate(-50%, -50%)"
      borderColor="secondary"
      border="1px solid"
      p={10}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      <CustomHeading type="h1" w="full">
        {children}
      </CustomHeading>
      {addDescription && (
        <CustomHeading type="h4" mt="40px">
          Click on the right to continue
        </CustomHeading>
      )}
    </Flex>
  );
};

const TRANSITION_TIME = 1000;

const Home = () => {
  const [whereToStartSolved, setWhereToStartSolved] = useState(false);
  const [startedAtZero, setStartedAtZero] = useState(false);

  const [selectedCardIdx, setSelectedCardIdx] = useState<number | null>(null);

  const [showFinale, setShowFinale] = useState(false);
  const noCardSelected = selectedCardIdx === null;
  const selectedCard = noCardSelected ? null : CARDS[selectedCardIdx];
  if (!selectedCard && selectedCardIdx !== null) setSelectedCardIdx(null);

  useEffect(() => {
    const startAtZero = (() => {
      if (typeof window === "undefined") return;
      const newSearchParams = new URLSearchParams(window.location.search);
      return !!newSearchParams.get("startAtZero");
    })();
    if (startAtZero && noCardSelected) {
      setStartedAtZero(true);
      setSelectedCardIdx(0);
    }
    setWhereToStartSolved(true);
  }, []);

  if (!whereToStartSolved) return null;

  return (
    <>
      <Head>
        <title>For my love</title>
        <meta name="description" content="For my love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box h="100vh" w="100vw" overflow="hidden">
          {!startedAtZero && (
            <Box
              position="absolute"
              zIndex={5000}
              top="1"
              left="1"
              onClick={() => {
                setShowFinale(false);
                setSelectedCardIdx(null);
              }}
            >
              <CloseIcon />
            </Box>
          )}
          <Box
            zIndex={1999}
            position="absolute"
            top={0}
            left={0}
            height="100vh"
            w="100vw"
            backdropFilter="blur(10px)"
            pointerEvents="none"
            opacity={showFinale ? 1 : 0}
            transition={`all ${TRANSITION_TIME}ms`}
            transitionDelay={`${TRANSITION_TIME}ms`}
          />
          <Box
            pointerEvents={showFinale ? "all" : "none"}
            sx={{
              "*": {
                opacity: showFinale ? 1 : 0,
                transition: `all ${TRANSITION_TIME}ms`,
                transitionDelay: `${TRANSITION_TIME}ms`,
              },
            }}
          >
            <Finale />
          </Box>

          <Flex
            position="relative"
            transformOrigin="top left"
            {...(selectedCard
              ? {
                  left: `-${selectedCard.left - 50}vw`,
                  top: `-${selectedCard.top - 50}vh`,
                  transform: "scale(1)",
                }
              : { left: 0, top: 0, transform: "scale(0.1)" })}
            transition={`all ${TRANSITION_TIME}ms`}
            bg="background"
            w={`${SIZE * 100}vw`}
            h={`${SIZE * 100}vh`}
          >
            {CARDS.map(({ text, ...rest }, index) => (
              <Card
                key={index}
                onClick={() => {
                  if (noCardSelected) setSelectedCardIdx(index);
                }}
                addDescription={index === 0 && startedAtZero}
                {...rest}
              >
                <Box pointerEvents={noCardSelected ? "none" : "all"}>
                  {text}
                  {/* PREVIOUS */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="20%"
                    h="100%"
                    onClick={() => {
                      if (index === 0) return;
                      setSelectedCardIdx(index - 1);
                    }}
                  />
                  {/* NEXT */}
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="80%"
                    h="100%"
                    onClick={() => {
                      if (index === CARDS.length - 1) {
                        setShowFinale(true);
                        setSelectedCardIdx(null);
                        return;
                      }
                      setSelectedCardIdx(index + 1);
                    }}
                  />
                </Box>
              </Card>
            ))}
          </Flex>
        </Box>
      </main>
    </>
  );
};

export default Home;
