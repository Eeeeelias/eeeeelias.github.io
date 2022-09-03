import {
  Text,
  Stack,
  keyframes,
  createStyles,
  Divider,
  Container,
  Group,
} from "@mantine/core"
import { IconDna2 } from "@tabler/icons"

import { BadgeCard } from "./cards"
import { LeadGrid } from "./grid"
import { HeaderMiddle } from "./header"
import { Theming } from "./theme"

export const rotateColor = keyframes({
  from: { color: "rgb(115, 148, 181)" },
  to: { color: "rgb(45, 140, 91)" },
})

const useStyles = createStyles(theme => ({
  spin: {
    textAlign: "center",
    padding: theme.spacing.xl,
    animation: `${rotateColor} 1s alternate infinite`,
  },
}))

export default function App() {
  const { classes } = useStyles()
  //change home link lmao
  return (
    <>
      <Theming>
        <HeaderMiddle
          links={[
            { label: "Top", link: "#top" },
            { label: "Projects", link: "#projects" },
            { label: "Myself", link: "#myself" },
          ]}
        />
        <Stack align="center" mt={200} mb={200}>
          <Text size="80px" weight={5000}>
            Welcome to my personal hell!
          </Text>
          <Text size="30px" weight={20}>
            Have a look around and feel free to try out the programs I made.
          </Text>
          <IconDna2 size={300} stroke={1} className={classes.spin} />
        </Stack>
        <Stack id="projects" mt={200} mb={200}>
          <Container size={"xl"} mb={50} mx={300}>
            <Divider
              my="sm"
              size="lg"
              label={
                <>
                  <Text size="30px" weight={5000}>
                    {" "}
                    Some of my projects
                  </Text>
                </>
              }
              labelPosition="center"
            />
          </Container>
          <Group position="center" my={100}>
            <BadgeCard
              image={"/files/minigue.721783fd.webp"}
              title={"MiniguePT (backend)"}
              description={
                "A chatbot based on my chat data. To stay connected with me even when I'm not here!"
              }
              demoLink={"https://chatty.rhostruct.de"}
              githubLink={"https://github.com/Eeeeelias/miniguept-chat"}
            />
            <BadgeCard
              image={"/files/gor_example.png"}
              title={"GOR"}
              description={
                "An Algorithm to predict the secondary structure of proteins"
              }
              demoLink={"https://web.rhostruct.de/gor.html"}
              githubLink={"https://gitlab2.cip.ifi.lmu.de/albrechte/java-gor"}
            />
            <BadgeCard
              image={"/files/pmm.png"}
              title={"Plex Media Move"}
              description={
                "Scripts to help rename, organize, move and combine shows and movies to make them compatible with Plex"
              }
              demoLink={""}
              githubLink={"https://github.com/Eeeeelias/plex_media_move"}
            />
          </Group>
        </Stack>
        <Stack id="myself" mt={200} mb={200}>
          <Container size={"xl"} mx={300}>
            <Divider
              id="myself"
              my="sm"
              size="lg"
              label={
                <>
                  <Text size="30px" weight={5000}>
                    {" "}
                    About myself
                  </Text>
                </>
              }
              labelPosition="center"
            />
          </Container>
          <LeadGrid />
        </Stack>
      </Theming>
    </>
  )
}
