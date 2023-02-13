import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {authentication} from '../../firebase/firebase-config';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenParameters = {};

type Props = NativeStackScreenProps<LoginScreenParameters>;

const LoginScreen = ({navigation}: Props): JSX.Element => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInUser = async () => {
    try {
      const {user} = await signInWithEmailAndPassword(
        authentication,
        email,
        password,
      );
      setIsSignedIn(true);

      console.log(user.email);
      console.group('Signed in');
    } catch (error) {
      console.log(error);
    }
  };

  const SignOutUser = async () => {
    try {
      const re = await signOut(authentication);
      setIsSignedIn(false);

      console.log('Signed Out');
      console.log(re);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={input => setPassword(input)}
      />
      {isSignedIn === true ? (
        <Button title="Sign Out" onPress={SignOutUser} />
      ) : (
        <Button title="Sign In" onPress={SignInUser} />
      )}
      <Button title="Sign Up" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
});

export default LoginScreen;
