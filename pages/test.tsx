import { createStyles, Group, Paper } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import TestService from "../services/TestService";
import { IUser } from "../types/User.interface";

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
      <Paper>
        <Group mx={"auto"} position='center'>
          <div>{data.email}</div>
        </Group>
      </Paper>
    );
  }

  return (
    <Paper>
      <Group mx={"auto"} position='center'>
        <div>loading....</div>
      </Group>
    </Paper>
  );
};

export default Test;
