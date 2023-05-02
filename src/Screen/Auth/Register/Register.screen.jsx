import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('screen').height;

// import { useDispatch, useSelector } from 'react-redux'
// import { register, resetError } from '../../../store/auth.slice'

import { DismissKeyboardView, Input } from '../../../component/Common'

import theme from '../../../theme'
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native-web';
const RegisterScreen = ({ navigation }) => {
  // const dispatch = useDispatch()
  // const { loading, error } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false)
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [formError, setFormError] = useState('')

  const handleRegister = async () => {
    const { fullName, email, phone, password, confirmPassword } = formState

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setFormError('All fields are required')
      setTimeout(() => {
        setFormError('')
      }, 4000)
      return
    }
    if (password !== confirmPassword) {
      setFormError('Passwords do not match')
      setTimeout(() => {
        setFormError('')
      }, 4000)
      return
    }

    // const user = new User(fullName, email, phone)
    // dispatch(register({ email, password, user }))
  }

  useFocusEffect(
    useCallback(() => {
      // dispatch(resetError())
      setFormError('')
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      })
    }, [])
  )

  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboardView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Register new account</Text>
          <View style={styles.form}>


            <View style={styles.inputContainer}>
              <TextInput
                label="Name"
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="mail" />}
              />
              <TextInput
                label="Email"
                inputMode='email'
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="eye" />}
              />
              <TextInput
                label="Phone"
                inputMode="tel"
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="eye" />}
              />
              <TextInput
                label="Password"
                secureTextEntry={true}
                style={styles.input}
                underlineColor={theme.colors.primary}
                activeUnderlineColor={theme.colors.primary}
                right={<TextInput.Icon name="eye" />}
              />
              <TextInput
                label="Confirm Password"
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

            <TouchableOpacity disabled={loading} onPress={handleRegister}>
              <View style={styles.button}>
                {loading ? (
                  <ActivityIndicator size="small" color={theme.colors.black} />
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
              </View>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </DismissKeyboardView>
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
  header: {
    fontSize: 24,
    fontFamily: theme.fonts.type.semiBold,
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: 40,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    marginTop: screenHeight / 5,
  },
  form: {
    marginTop: screenHeight / 20,
    backgroundColor: theme.colors.white,
    height: screenHeight / 1.5,
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
    marginTop: 8
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

export default RegisterScreen
