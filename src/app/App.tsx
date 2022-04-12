import React from 'react'
import { Provider } from 'outstated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppRouter } from 'lib/routing'
import { createStyles } from 'lib/styles'
import { useStyles } from 'lib/hooks'
import { stores } from 'lib/stores'

export const App: React.FunctionComponent = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <GestureHandlerRootView style={styles.appContainer}>
            <Provider stores={stores}>
                <AppRouter />
            </Provider>
        </GestureHandlerRootView>
    )
}

const stylesheet = createStyles(() => ({
    appContainer: {
        flex: 1
    }
}))
