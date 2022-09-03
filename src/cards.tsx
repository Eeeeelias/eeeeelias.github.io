import { Card, Image, Text, Group, Button, createStyles } from "@mantine/core"
import { IconBrandGithub } from "@tabler/icons"

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderRadius: 8,
    width: 300,
    height: 400,
    display: "flex",
    flexDirection: "column",
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}))

interface BadgeCardProps {
  image: string
  title: string
  description: string
  githubLink: string
  demoLink: string
}

export function BadgeCard({
  image,
  title,
  description,
  githubLink,
  demoLink,
}: BadgeCardProps) {
  const { classes } = useStyles()

  return (
    <Card withBorder radius="xs" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Group position="apart" mt="xs">
        <Text size="lg" weight={500}>
          {title}
        </Text>
      </Group>
      <Text size="sm" mt="xs" style={{ flex: 1 }}>
        {description}
      </Text>

      <Group mt="xs">
        <Button
          radius="md"
          style={{ flex: 1 }}
          variant="outline"
          component="a"
          href={demoLink}
          target="_blank"
        >
          Demo
        </Button>
        <Button
          radius="md"
          variant="outline"
          component="a"
          href={githubLink}
          target="_blank"
        >
          Github&nbsp;
          <IconBrandGithub size={18} />
        </Button>
      </Group>
    </Card>
  )
}
