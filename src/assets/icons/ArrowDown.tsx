import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const ArrowDown: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M30 46.708a3.686 3.686 0 0 1-2.608-1.082L1.04 19.277a1.844 1.844 0 0 1 2.607-2.608L30 43.02l26.353-26.351a1.844 1.844 0 1 1 2.607 2.608l-26.353 26.35A3.686 3.686 0 0 1 30 46.708Z" />
    </Icon>
)
