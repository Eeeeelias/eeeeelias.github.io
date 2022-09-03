import { useState } from "react"

import {
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Text,
  createStyles,
  useMantineColorScheme,
  Center,
  UnstyledButton,
} from "@mantine/core"
import { upperFirst, useDisclosure } from "@mantine/hooks"
import {
  IconSun,
  IconMoon,
  IconBrandSteam,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons"

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
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },
  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 136,
    height: 36,
  },

  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.dark[4],
    color: theme.colorScheme === "dark" ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}))

export function ButtonToggle() {
  const { classes } = useStyles()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const Icon = colorScheme === "dark" ? IconSun : IconMoon

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        aria-label="Toggle theme"
        className={classes.control}
        onClick={() => toggleColorScheme()}
        title="Ctrl + J"
      >
        <Text size="xs" className={classes.value}>
          {upperFirst(colorScheme === "light" ? "dark" : "light")} theme
        </Text>
        <Center className={classes.iconWrapper}>
          <Icon size={18} stroke={1.5} />
        </Center>
      </UnstyledButton>
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
            <ButtonToggle />
          </Container>
        </Group>
      </Container>
    </Header>
  )
}
