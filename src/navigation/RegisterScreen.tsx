import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {authentication} from '../../firebase/firebase-config';

type RegisterScreenParameters = {};

type Props = NativeStackScreenProps<RegisterScreenParameters>;

const RegisterScreen = ({navigation}: Props): JSX.Element => {
  //   const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = async () => {
    try {
      const {user} = await createUserWithEmailAndPassword(
        authentication,
        email,
        password,
      );
      //   setIsSignedIn(true);

      console.log(user);
      console.log('Registered');
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
      <Button title="Sign Up" onPress={RegisterUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
});

export default RegisterScreen;
