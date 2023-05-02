import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../../Screen/Auth/Login/Login.screen'
import RegisterScreen from '../../../Screen/Auth/Register/Register.screen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
