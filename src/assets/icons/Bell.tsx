import React from 'react'
import { Path } from 'react-native-svg'
import { IconProps } from 'lib/types'
import { Icon } from './Icon'

export const Bell: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <Path d="M39.847 69.621a6.931 6.931 0 0 1-6.649-4.978 1.832 1.832 0 0 1 3.516-1.032 3.266 3.266 0 0 0 6.267 0 1.832 1.832 0 1 1 3.516 1.032 6.931 6.931 0 0 1-6.649 4.978Z" />
        <Path d="M39.841 20.16a1.832 1.832 0 0 1-1.832-1.832v-5.5a1.832 1.832 0 0 1 3.664 0v5.5a1.832 1.832 0 0 1-1.832 1.832Z" />
        <Path d="M39.841 16.496a20.152 20.152 0 0 1 20.152 20.15c0 14.522 2.675 18.318 3.028 18.755a1.7 1.7 0 0 1 .657 1.963 1.888 1.888 0 0 1-1.853 1.266H17.86a1.838 1.838 0 0 1-1.679-1.033 1.789 1.789 0 0 1 .226-1.916c.184-.268 3.285-5.013 3.285-19.035a20.152 20.152 0 0 1 20.149-20.15Zm18.842 38.472c-1.156-2.961-2.355-8.419-2.355-18.32a16.488 16.488 0 0 0-32.976 0c0 9.651-1.384 15.29-2.542 18.32Z" />
    </Icon>
)
