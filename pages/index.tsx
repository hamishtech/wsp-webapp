import { Button, Center, createStyles, Group } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import AppLogo from "../components/common/AppLogo";
import { ArrowBigRight } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  group: {
    height: "100vh",
    backgroundImage:
      "url(https://cutewallpaper.org/22/1920x1080-desktop-pixel-art-wallpapers/pixel-art-landscapes-album-on-imgur-pixel-art-landscape-pixel-art-water-illustration.png)",
    backgroundSize: "cover",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Center className={classes.group}>
        <Group direction='column' align={"center"}>
          <AppLogo color='white' />
          <Link href='/test' passHref>
            <Button
              variant='filled'
              compact
              size='xs'
              color={"green"}
              leftIcon={<ArrowBigRight size={18} />}
              component='a'
            >
              Enter
            </Button>
          </Link>
        </Group>
      </Center>
    </div>
  );
};

export default Home;
