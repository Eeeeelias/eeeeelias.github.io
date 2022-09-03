import { PropsWithChildren, useState } from "react"

import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core"

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
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

export function Theming({ children }: PropsWithChildren) {
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
          fontSizes: { xxl: 80 },
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
