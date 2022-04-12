import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const Close: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M12.819 69.201a1.819 1.819 0 0 1-1.286-3.1L66.1 11.533a1.819 1.819 0 0 1 2.57 2.568L14.1 68.67a1.813 1.813 0 0 1-1.281.531Z" />
        <Path d="M67.384 69.201a1.813 1.813 0 0 1-1.286-.533L11.533 14.101a1.819 1.819 0 0 1 2.567-2.568l54.57 54.568a1.819 1.819 0 0 1-1.286 3.1Z" />
    </Icon>
)
