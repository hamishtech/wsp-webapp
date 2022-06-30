import {
  AppShell,
  Button,
  Center,
  createStyles,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Id, toast } from "react-toastify";
import AuthenticationService from "../../services/AuthenticationService";
import { GoogleCredentialsDTO } from "../../types/GoogleCredentials.interface";
import { IUser } from "../../types/User.interface";
import AppLogo from "../common/AppLogo";
import { GoogleIcon } from "./Icons/GoogleIcon";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export function AuthForm() {
  let [user, setUser] = useState<IUser | null>(null);
  const toastId = React.useRef<Id>("random");
  const router = useRouter();

  const loggingInToast = () =>
    (toastId.current = toast.loading("Logging in", { autoClose: false }));

  const loginSuccessToast = () =>
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      isLoading: false,
      render: () => <div>Login Success! Welcome</div>,
    });

  const loginFailureToast = () => {
    toast.error("Login failed");
  };

  const mutation = useMutation(
    (dto: GoogleCredentialsDTO) => {
      return AuthenticationService.loginWithGoogle(dto);
    },
    {
      onSuccess: (data, variables, context) => {
        setUser(data.user);
        loginSuccessToast();
        localStorage.setItem("wsps_token", data.token);
        router.push("/test");
      },
      onMutate: () => {
        loggingInToast();
      },
      onError: (error) => {
        loginFailureToast();
      },
    }
  );
  const { classes } = useStyles();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      var dto: GoogleCredentialsDTO = {
        credentials: { access_token: tokenResponse.access_token },
      };
      mutation.mutate(dto);
      setUser(user);
    },
    onError: () => loginFailureToast(),
  });

  // let headerHeight = "100px";
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          padding: "md",
          // minHeight: `calc(100vh - ${headerHeight})`,
          minHeight: "100vh",
          backgroundImage:
            "url(https://cutewallpaper.org/22/1920x1080-desktop-pixel-art-wallpapers/pixel-art-landscapes-album-on-imgur-pixel-art-landscape-pixel-art-water-illustration.png)",
          backgroundSize: "cover",
        },
      })}
    >
      <Center
        style={{
          position: "absolute",
          left: "50%",
          top: 50,
          transform: "translate(-50%, -50%)",
        }}
      >
        <AppLogo color='white' />
      </Center>
      <Center style={{ height: "100%" }} component='div'>
        <Group direction='column' position='center'>
          <Paper withBorder shadow='md' p={20} radius='md'>
            <Title order={6} className={classes.title} align='center' mb={25}>
              To continue, log in with your Google account.
            </Title>
            <Button
              variant='outline'
              leftIcon={<GoogleIcon />}
              fullWidth
              onClick={() => login()}
            >
              <Text size='md' transform='uppercase'>
                Continue with Google
              </Text>
            </Button>
          </Paper>
        </Group>
      </Center>
    </AppShell>
  );
}
