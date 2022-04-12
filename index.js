import 'react-native-get-random-values'
import 'react-native-reanimated'
import { enableFreeze } from 'react-native-screens'
import { AppRegistry } from 'react-native'
import { App } from 'app'
import { name as appName } from './app.json'

enableFreeze(true)

AppRegistry.registerComponent(appName, () => App)
