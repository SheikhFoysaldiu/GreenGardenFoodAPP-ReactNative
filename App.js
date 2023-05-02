
import 'react-native-gesture-handler';
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/component/Navigator';
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-ExtraLight': require('./src/assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Thin': require('./src/assets/fonts/Montserrat-Thin.ttf')
  })
  if (!fontsLoaded) {
    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default App;














