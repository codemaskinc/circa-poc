import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const ArrowRight: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M25.906 71a1.906 1.906 0 0 1-1.348-3.254L51.804 40.5 24.558 13.254a1.91 1.91 0 1 1 2.7-2.7L54.5 37.805a3.81 3.81 0 0 1 0 5.391L27.254 70.442a1.9 1.9 0 0 1-1.348.558Z" />
    </Icon>
)
