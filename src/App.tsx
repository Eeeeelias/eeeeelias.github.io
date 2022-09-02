import { useState, PropsWithChildren } from "react"

import {
  MantineProvider,
  Text,
  Stack,
  Global,
  ColorSchemeProvider,
  ColorScheme,
  keyframes,
  createStyles,
  Header,
  Group,
  ActionIcon,
  Divider,
  Container,
  Burger,
  useMantineColorScheme,
  SegmentedControl,
  Center,
  Box,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  IconSun,
  IconMoon,
  IconBrandSteam,
  IconBrandGithub,
  IconMail,
  IconDna2,
} from "@tabler/icons"

export const rotateColor = keyframes({
  from: { color: "rgb(115, 148, 181)" },
  to: { color: "rgb(45, 140, 91)" },
})

const useStyles = createStyles(theme => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  spin: {
    textAlign: "center",
    padding: theme.spacing.xl,
    animation: `${rotateColor} 1s alternate infinite`,
  },
}))

export function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group position="center" my="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={(value: "light" | "dark") => toggleColorScheme(value)}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  )
}

interface HeaderMiddleProps {
  links: { link: string; label: string }[]
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        //event.preventDefault();
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={56} mb={120} fixed={true}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Group position="apart">
          <Container>
            <Group
              spacing={0}
              className={classes.social}
              position="right"
              noWrap
            >
              <ActionIcon
                size="lg"
                component="a"
                href="https://github.com/Eeeeelias"
                target="_blank"
              >
                <IconBrandGithub size={22} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                component="a"
                href="https://steamcommunity.com/id/miginu"
                target="_blank"
              >
                <IconBrandSteam size={22} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                component="a"
                href="mailto: elias.albrecht@rhostruct.de"
              >
                <IconMail size={22} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Container>

          <Container>
            <SegmentedToggle />
          </Container>
        </Group>
      </Container>
    </Header>
  )
}

function GlobalStyles() {
  return (
    <Global
      styles={theme => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },
      })}
    />
  )
}

function Theming({ children }: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily: "Open Sans, sans-serif",
          fontSizes: { xs: 15, sm: 20, md: 25, lg: 40, xl: 80 },
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <GlobalStyles />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

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
            { label: "Myself", link: "https://web.rhostruct.de/gor.html" },
          ]}
        />
        <Stack id="top" align="center" mt={200}>
          <Text size="xl" weight={5000}>
            Welcome to my personal hell!
          </Text>
          <Text size="md" weight={20}>
            Have a look around and feel free to try out the programs I made.
          </Text>
          <IconDna2 size={300} stroke={1} className={classes.spin} />
        </Stack>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container size={"xl"}>
          <Divider
            id="projects"
            my="sm"
            size="lg"
            label={
              <>
                <Text size="lg" weight={5000}>
                  {" "}
                  Here are some of my projects
                </Text>
              </>
            }
            labelPosition="center"
          />
        </Container>
        <Container>"Add tiles here"</Container>
      </Theming>
    </>
  )
}
