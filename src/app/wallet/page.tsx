"use client"
import { useState, useCallback, useEffect } from 'react';
import { NextPage } from 'next';
import { ChakraProvider, Box, Flex, Grid, GridItem, Image, useToast } from "@chakra-ui/react";
import AuthClient, { generateNonce } from "@walletconnect/auth-client";
import { Web3Modal } from "@web3modal/standalone";
import { version } from "@walletconnect/auth-client/package.json";

// Ensure you have these components defined
import DefaultView from "@/views/DefaultView";
import SignedInView from "@/views/SignedInView";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

const web3Modal = new Web3Modal({
  projectId,
  walletConnectVersion: 2,
});

const Home: NextPage = () => {
  const [client, setClient] = useState<AuthClient | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [uri, setUri] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [view, setView] = useState<"default" | "qr" | "signedIn">("default");
  const toast = useToast();

  const onSignIn = useCallback(() => {
    if (!client) return;
    client
      .request({
        aud: window.location.href,
        domain: window.location.hostname.split(".").slice(-2).join("."),
        chainId: "eip155:1",
        type: "eip4361",
        nonce: generateNonce(),
        statement: "Sign in with wallet.",
      })
      .then(({ uri }) => {
        if (uri) {
          setUri(uri);
        }
      });
  }, [client]);

  useEffect(() => {
    AuthClient.init({
      relayUrl: process.env.NEXT_PUBLIC_RELAY_URL || "wss://relay.walletconnect.com",
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
      metadata: {
        name: "",
        description: "",
        url: window.location.host,
        icons: [],
      },
    })
      .then((authClient) => {
        setClient(authClient);
        setHasInitialized(true);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!client) return;
    client.on("auth_response", ({ params }) => {
      if ("code" in params) {
        console.error(params);
        return web3Modal.closeModal();
      }
      if ("error" in params) {
        console.error(params.error);
        if ("message" in params.error) {
          toast({
            status: "error",
            title: params.error.message,
          });
        }
        return web3Modal.closeModal();
      }
      toast({
        status: "success",
        title: "Auth request successfully approved",
        colorScheme: "whatsapp",
      });
      setAddress(params.result.p.iss.split(":")[4]);
    });
  }, [client, toast]);

  useEffect(() => {
    async function handleOpenModal() {
      if (uri) {
        await web3Modal.openModal({
          uri,
          standaloneChains: ["eip155:1"],
        });
      }
    }
    handleOpenModal();
  }, [uri]);

  useEffect(() => {
    if (address) {
      web3Modal.closeModal();
      setView("signedIn");
    }
  }, [address]);

  return (
    <ChakraProvider>
      <Box width="100vw" height="100vh" className="bg-primary">
        <Grid
          templateAreas={`"header" "main" "footer"`}
          style={{ height: "100%", width: "100%" }}
          gridTemplateRows={"50px 3fr 20px"}
          gridTemplateColumns={"1fr"}
          paddingY="2em"
        >
          <GridItem area={"header"}>
            <Flex alignItems="center" justifyContent="center" gap="5" fontSize={"1.25em"}>
              <div>Neon Purse</div>
              <Flex padding="0.5em" borderRadius="16px" className="bg-secondary" gap="2">
                <Image width="1.5em" height="1.5em" src="/wc-bg.png" alt="WC" />
                <span>V{version}</span>
              </Flex>
            </Flex>
          </GridItem>
          <Flex justifyContent="center">
            <GridItem area={"main"} justifyContent="center">
              <Box width="100%" height="100%">
                {view === "default" && (
                  <DefaultView onClick={onSignIn} hasInitialized={hasInitialized} />
                )}
                {view === "signedIn" && <SignedInView address={address} />}
              </Box>
            </GridItem>
          </Flex>
          <GridItem area={"footer"} alignSelf="flex-end">
            <Flex justifyContent="flex-end">
                          </Flex>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Home;