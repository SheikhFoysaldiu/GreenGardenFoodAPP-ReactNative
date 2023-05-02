import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView, StyleSheet, Image, Platform } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, resetError } from '../../../store/auth.slice'
import { DismissKeyboardView, Input } from '../../../component/Common'
import theme from '../../../theme'
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('screen').height;

const LoginScreen = ({ navigation }) => {
  // const dispatch = useDispatch()
  // const { loading, error } = useSelector(state => state.auth)

  const [loading, setLoading] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const [formError, setFormError] = useState('')

  const handleLogin = () => {
    const { email, password } = formState

    return navigation.dispatch({
      type: 'NAVIGATE',
      payload: {
        name: 'Home'
      }
    });


    if (!email || !password) {
      setFormError('All fields are required')
      setTimeout(() => {
        setFormError('')
      }, 4000)
      return
    }

    // dispatch(login({ email, password }))
  }

  useFocusEffect(
    useCallback(() => {
      // dispatch(resetError())
      setFormError('')
      setFormState({
        email: '',
        password: ''
      })
    }, [])
  )

  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboardView >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../dummy/Images/Green_Garden.png')} style={styles.logo} />
        </View >
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.form}>

            <View style={styles.inputContainer}>
              <TextInput
                label="Email"
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="mail" />}
              />
              <TextInput
                label="Password"
                secureTextEntry={true}
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="eye" />}
              />
            </View>


            {/* {(error || formError !== '') && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={18} color={theme.colors.red} />
              <Text style={styles.errorText}>{error ? error : formError}</Text>
            </View>
          )} */}

            <TouchableOpacity disabled={loading} onPress={handleLogin}>
              <View style={styles.button}>
                {loading ? (
                  <ActivityIndicator size="small" color={theme.colors.black} />
                ) : (
                  <Text style={styles.buttonText}>Login</Text>
                )}
              </View>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </DismissKeyboardView >

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 5,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    marginTop: screenHeight / 4

  },
  form: {
    marginTop: screenHeight / 5,
    backgroundColor: theme.colors.white,
    height: screenHeight / 2,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  inputContainer: {
    padding: 10,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 10
  },
  errorText: {
    fontSize: 12,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.red,
    marginLeft: 8
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  buttonText: {

    fontSize: 16,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.white
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  linkText: {
    fontSize: 14,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black
  },
  link: {
    fontSize: 14,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.primary,
    marginLeft: 6
  },
  input: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 8,
    paddingVertical: 16,
    fontSize: 12,
    fontFamily: theme.fonts.type.regular,
    color: theme.colors.black,
  },

})


export default LoginScreen
