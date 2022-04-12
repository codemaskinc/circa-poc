import { CreateStyles, CustomNamedStyles } from '../types'

export const createStyles = <T extends CustomNamedStyles<T> | CustomNamedStyles<any>>(stylesFactory: CreateStyles<T>) => stylesFactory
