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
import AppLogo from "../common/AppLogo";
import { GoogleIcon } from "./Icons/GoogleIcon";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useMutation, useQuery } from "react-query";
import { GoogleCredentialsDTO } from "../../types/GoogleCredentials.interface";
import { IUser } from "../../types/User.interface";
import AuthenticationService from "../../services/AuthenticationService";

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
  const mutation = useMutation(
    (dto: GoogleCredentialsDTO) => {
      return AuthenticationService.loginWithGoogle(dto);
    },
    {
      onSuccess: (data, variables, context) => {
        setUser(data.user);
        localStorage.setItem("wsps_token", data.token);
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
    onError: (error) => console.log("Login failed, error occurred"),
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
      {user && <div>{user.email}</div>}
      {mutation.isError && <div>error occured</div>}
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
