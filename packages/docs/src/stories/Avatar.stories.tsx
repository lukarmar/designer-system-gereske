import { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarProps } from "@call-ui/react"

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/lukarmar.png',
    alt: 'Luka Martins',
  },
  argTypes: {
    src: {
      type: 'string'
    }
  }
} as Meta<AvatarProps>


export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
    
}
