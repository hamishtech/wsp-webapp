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

export default Test;
