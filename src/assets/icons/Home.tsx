import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const Home: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M60.625 67.697h-15a1.875 1.875 0 0 1-1.875-1.875v-15a1.875 1.875 0 0 0-1.875-1.875h-3.75a1.875 1.875 0 0 0-1.875 1.875v15a1.875 1.875 0 0 1-1.875 1.875h-15a1.875 1.875 0 0 1-1.878-1.875V45.197a1.875 1.875 0 0 1 3.75 0v18.75h11.25V50.822a5.625 5.625 0 0 1 5.625-5.625h3.75a5.625 5.625 0 0 1 5.625 5.625v13.125h11.25v-18.75a1.875 1.875 0 1 1 3.75 0v20.625a1.875 1.875 0 0 1-1.872 1.875Z" />
        <Path d="M68.125 43.322a1.869 1.869 0 0 1-1.326-.549L41.327 17.3a1.875 1.875 0 0 0-2.653 0L13.197 42.773a1.875 1.875 0 0 1-2.648-2.652l25.473-25.472a5.625 5.625 0 0 1 7.957 0l25.472 25.472a1.875 1.875 0 0 1-1.326 3.2Z" />
    </Icon>
)
