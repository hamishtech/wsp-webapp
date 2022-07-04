import {
  Avatar,
  Center,
  createStyles,
  Group,
  Loader,
  Paper,
} from "@mantine/core";
import { useQuery } from "react-query";
import TestService from "../services/TestService";
import AuthenticationService from "../services/AuthenticationService";
import apiClient from "../services/apiClient";
import { NextPageContext } from "next";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  container: { height: "100vh" },
}));

const Test = () => {
  const { classes } = useStyles();
  const { data, isError, error, isLoading } = useQuery(
    "test",
    TestService.testCall
  );

  if (data) {
    return (
      <Center className={classes.container}>
        <Group>
          <Avatar src={data.picture} alt="it's me" />
          <div>{data.email}</div>
        </Group>
      </Center>
    );
  }

  return (
    <Paper>
      <Group mx={"auto"} position='center'>
        <Loader size={50} />
      </Group>
    </Paper>
  );
};
export const getServerSideProps = async (ctx: any) => {
  let isAuthenticated = await AuthenticationService.checkAuthentication(
    ctx.req.headers.cookie
  );

  if (!isAuthenticated) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  } else return { props: {} };
};

export default Test;
