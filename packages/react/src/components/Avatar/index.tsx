import { AvatarFallback, AvatarImage, AvatarRoot } from './styles'
import { User } from 'phosphor-react'


export interface AvatarProps extends React.ComponentProps<typeof AvatarImage> {}
  
export function Avatar(props: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User color='#fff' />
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = "Avatar"

