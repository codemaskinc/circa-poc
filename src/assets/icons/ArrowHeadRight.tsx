import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const ArrowHeadRight: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M68.125 42h-56.25a1.875 1.875 0 1 1 0-3.75h56.25a1.875 1.875 0 1 1 0 3.75Z" />
        <Path d="M41.875 68.25a1.875 1.875 0 0 1-1.326-3.2l24.924-24.925L40.549 15.2a1.875 1.875 0 0 1 2.651-2.651L69.451 38.8a1.875 1.875 0 0 1 0 2.652L43.2 67.7a1.869 1.869 0 0 1-1.325.55Z" />
    </Icon>
)
