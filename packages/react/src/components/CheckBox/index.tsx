import { Check } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";

export interface CheckBoxProps extends React.ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox(props: CheckBoxProps){
  return (
    <CheckBoxContainer { ...props }>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}


CheckBox.displayName = "CheckBox"