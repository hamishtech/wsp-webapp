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
import { kAppName } from "../../constants/strings";
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
  const { classes } = useStyles();
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
      //   <Header height={headerHeight}>
      //     <Center style={{ height: "100%" }}>
      //       <AppLogo />
      //     </Center>
      //   </Header>
      // }
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
          <Paper withBorder shadow='lg' p={20} radius='md'>
            <Title order={6} className={classes.title} align='center' mb={25}>
              To continue, log in to {kAppName}.
            </Title>
            <Button variant='outline' leftIcon={<GoogleIcon />} fullWidth>
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
