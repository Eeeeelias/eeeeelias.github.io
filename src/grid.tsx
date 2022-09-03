import {
  Container,
  Grid,
  SimpleGrid,
  Text,
  useMantineTheme,
  Image,
} from "@mantine/core"

const PRIMARY_COL_HEIGHT = 300

// REPLACE ALL THIS WITH STATS THAT WOULD BE SOOO COOOL OMG

export function LeadGrid() {
  const theme = useMantineTheme()
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2

  return (
    <Container my="100">
      <SimpleGrid
        cols={2}
        my={100}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Container
          style={{
            borderStyle: "solid",
            borderWidth: "thin",
            borderRadius: "8px",
          }}
          mx={0}
        >
          <Image src="/files/yuubari.jpg" />
          <Text size="lg" weight={20} my={20}>
            I'm 21 years old and studying Bioinformatics, B.Sc. and in my free
            time I play video games or do other things related to technology, be
            it on the hardware or software side of things.
          </Text>
        </Container>
        <Grid gutter="md">
          <Grid.Col
            style={{
              borderStyle: "solid",
              borderWidth: "thin",
              borderRadius: "8px",
            }}
          >
            <Text size="lg" weight={20}>
              My programs are all written mainly in python, java or a mix of
              both. I have a special interest in machine learning related things
              and have some experience with PyTorch.
            </Text>
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              borderStyle: "solid",
              borderWidth: "thin",
              borderRadius: "8px",
            }}
          >
            <Text size={"lg"} weight={20}>
              My working environment: <br /> <br />
            </Text>
            <Text size={"md"} weight={15}>
              OS: Linux & Windows <br />
              Languages: Python, Java, Bash, JS(?) <br />
              IDEs: JetBrains IDE, Neovim
            </Text>
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              borderStyle: "solid",
              borderWidth: "thin",
              borderRadius: "8px",
            }}
          >
            <Text size={"lg"} weight={20}>
              My favourite games: <br /> <br />
            </Text>
            <Text size={"md"} weight={15}>
              - DarkSouls <br />
              - Elden Ring <br />- Hatsune Miku Project DIVA Mega Mix+
            </Text>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  )
}
