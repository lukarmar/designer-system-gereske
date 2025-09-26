import { Meta, StoryObj } from "@storybook/react-vite"

import { Box, CheckBox, Text, CheckBoxProps } from "@call-ui/react"

export default {
  title: "Form/CheckBox",
  component: CheckBox,
  decorators: [(Story) => {
    return (
      <Box as="label" css={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: '$2',
       }}>
        {Story()}
        <Text size={'sm'}>Accepted terms of use</Text>
      </Box>
    )
  }],
  
  args: {},
} as Meta<CheckBoxProps>


export const Primary: StoryObj<CheckBoxProps> = {}
