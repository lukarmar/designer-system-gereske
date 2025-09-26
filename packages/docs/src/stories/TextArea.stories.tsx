import { Meta, StoryObj } from "@storybook/react-vite"

import { Box, TextArea, Text, TextareaProps } from "@call-ui/react"

export default {
  title: "Form/Text Area",
  component: TextArea,
  decorators: [(Story) => {
    return (
      <Box as="label" css={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '$2',
       }}>
        <Text size={'sm'}>observations</Text>
        {Story()}
      </Box>
    )
  }],
  
  args: {},
} as Meta<TextareaProps>


export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: "Add any observations...",
  }
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  }
}


