import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const Bars: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M24.6 46.366H12.143A2.143 2.143 0 0 0 10 48.509v15.615a2.143 2.143 0 0 0 2.143 2.143H24.6a2.143 2.143 0 0 0 2.143-2.143V48.509a2.143 2.143 0 0 0-2.143-2.143Z" />
        <Path d="M46.225 31.3H33.771a2.143 2.143 0 0 0-2.143 2.143v30.67a2.143 2.143 0 0 0 2.143 2.14h12.454a2.143 2.143 0 0 0 2.143-2.143V33.443a2.143 2.143 0 0 0-2.143-2.143Z" />
        <Path d="M67.857 14H55.404a2.143 2.143 0 0 0-2.143 2.143v47.984a2.143 2.143 0 0 0 2.143 2.143h12.453A2.143 2.143 0 0 0 70 64.127V16.143A2.143 2.143 0 0 0 67.857 14Z" />
    </Icon>
)
