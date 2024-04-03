import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'; // Import necessary components and hooks
import { Button, Flex, Modal, Text } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import bg from "../../assets/bg.webp";
import Logo from "../../components/Logo";
import appStrings from "../../utils/strings";
import { setCookie } from '../../utils/Cookies';


export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId="765198139881-0vdveqqf338q0g9nvkclphnockf9f35n.apps.googleusercontent.com">
      <LoginPageContent />
    </GoogleOAuthProvider>
  );
}

function LoginPageContent() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setCookie('access_token', tokenResponse.access_token); // Save the access token to a cookie
    },
  });

  return (
    <Flex 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      align="center"
      justify="center"
    >
      <Modal
        opened
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.1,
          blur: 5,
        }}
        yOffset={70}
        padding={24}
        radius="md"
      >
        <Flex direction="column" align="center">
          <Logo size={25} />
          <Text size="1.3rem" style={{ marginTop: 20 }}>
            {appStrings.language.login}
          </Text>
          <Button
            w="100%"
            variant="gradient"
            gradient={{ from: "#89C4DF", to: "#31AFD8", deg: 90 }}
            style={{ marginTop: 40 }}
            onClick={() => login()}
            leftSection={<IconBrandGoogleFilled size="1rem" />}
          >
            Google
          </Button> 
        </Flex>
      </Modal>
    </Flex>
  );
}