import React from 'react'
import Svg from 'react-native-svg'
import { IconProps } from 'lib/types'
import { useIconColor } from './useIconColor'

export const Icon: React.FunctionComponent<IconProps> = ({ size, isActive, forceColor, children }) => {
    const color = useIconColor(isActive, forceColor)

    return (
        <Svg
            fill={color}
            width={size}
            height={size}
            viewBox="0 0 80 80"
        >
            {children}
        </Svg>
    )
}
