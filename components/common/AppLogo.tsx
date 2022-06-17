import { createStyles, Group, Title } from "@mantine/core";
import { kAppName } from "../../constants/strings";
const useStyles = createStyles((theme) => ({
  title: {
    fontFamily:
      "'Libre Barcode 39 Text', 'cursive'"
  },
}));

const AppLogo = ({ color }: { color?: string }) => {
  const { classes } = useStyles();
  return (
    <Group spacing='xs'>
      <Title
        style={{ color: color }}
        order={1} className={classes.title}>
        {kAppName}
      </Title>
    </Group>
  );
};

export default AppLogo;
