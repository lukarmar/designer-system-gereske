import { Meta, StoryObj } from "@storybook/react-vite"

import { Box, BoxProps, Text } from "@call-ui/react"

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>This is a box component.</Text>
  },
  argTypes: {
    children: {
      control: {
        disable: true
      },
    },
  },
} as Meta<BoxProps>


export const Primary: StoryObj<BoxProps> = {}
