import {
  AppShell,
  Button,
  Center,
  createStyles,
  Group,
  Header,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { PlayCard } from "tabler-icons-react";
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
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          padding: "md",
          minHeight: "calc(100vh - 100px)",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      padding='md'
      header={
        <Header height={100} p='xs'>
          <Center style={{ height: "100%" }}>
            <AppLogo />
          </Center>
        </Header>
      }
    >
      <Center style={{ height: "100%" }} component='div'>
        <Group direction='column' position='center'>
          <Paper withBorder shadow='md' p={30} radius='md'>
            <Title order={6} className={classes.title} align='center' mb={25}>
              To continue, log in to {kAppName}.
            </Title>
            <Button variant='outline' leftIcon={<GoogleIcon />} fullWidth>
              <Text transform='uppercase'>Continue with Google</Text>
            </Button>
          </Paper>
        </Group>
      </Center>
    </AppShell>
  );
}
