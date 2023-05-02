import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './Auth/Auth.navigator';
import TabsNavigator from './Tabs';
// import { useDispatch, useSelector } from 'react-redux'
// import { loadUser } from '../store/auth.slice'



const AppNavigator = () => {
    // const dispatch = useDispatch()
    // const { user } = useSelector(state => state.auth)
    const user = true;
    // useEffect(() => {
    //     dispatch(loadUser())
    // }, [])

    return <NavigationContainer>{!user ? <AuthNavigator /> : <TabsNavigator />}</NavigationContainer>
}

export default AppNavigator