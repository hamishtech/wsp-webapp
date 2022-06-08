import { createStyles, Group, Paper } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: { height: "100vh" },
}));

const Test = () => {
  const { classes } = useStyles();
  return (
    <Paper >
      <Group mx={"auto"} position='center'>
        <div>hello</div>
      </Group>
    </Paper>
  );
};

export default Test;
