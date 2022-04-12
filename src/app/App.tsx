import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppRouter } from 'lib/routing'
import { createStyles } from 'lib/styles'
import { useStyles } from 'lib/hooks'

export const App: React.FunctionComponent = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <GestureHandlerRootView style={styles.appContainer}>
            <AppRouter />
        </GestureHandlerRootView>
    )
}

const stylesheet = createStyles(() => ({
    appContainer: {
        flex: 1
    }
}))
