import { Label, MultiStepContainer, Steps, Step } from './styles'


export interface MultiStepProps extends React.ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
      <MultiStepContainer>
        <Label>
          Passo {currentStep} de {size}
        </Label>
        <Steps css={{ '--steps-size': size }}>
          { Array.from({ length: size }, (_, index) => index + 1).map((step) => {
            return <Step key={step} active={step <= currentStep} />
          }) }
        </Steps>

      </MultiStepContainer>
  )
}

MultiStep.displayName = "MultiStep"