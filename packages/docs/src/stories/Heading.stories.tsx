import { Meta, StoryObj } from "@storybook/react-vite"

import { Heading, HeadingProps } from "@call-ui/react"

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet!',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<HeadingProps>


export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'Heading as H1 Example',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can change the HTML tag of the Heading component using the `as` prop. This allows you to use it as any semantic HTML element, such as `h1`, `h3`, etc.',
      },
    },
  }
}
