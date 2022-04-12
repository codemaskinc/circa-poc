import React from 'react'
import { IconProps } from './icon'

export type Route = {
    name: string,
    key: string,
    icon: React.FunctionComponent<IconProps>
}
